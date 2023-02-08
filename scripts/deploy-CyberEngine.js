const { ethers } = require("hardhat");

async function main() {
  // use Create2Deployer deployer contract

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_GOERLI_URL
  );
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  let Create2Deployer = "0x13C3f19093A83b7Bce64C225ea1D66Fc01326a85";
  let abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "addr",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "Deployed",
      type: "event",
    },
    {
      inputs: [
        { internalType: "bytes", name: "code", type: "bytes" },
        { internalType: "bytes32", name: "salt", type: "bytes32" },
      ],
      name: "deploy",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const contract = new ethers.Contract(Create2Deployer, abi, signer);

  const cyberEngineBytecode = await (
    await ethers.getContractFactory("CyberEngine")
  ).bytecode;

  const salt = ethers.utils.solidityKeccak256(["string"], ["CyberEngine11"]);
  // 0xe49e2324fa61fb0392351c4421c7d2e57ac1c3e8a8802ba6f67e82679cf43d82
  console.log("CyberEngine salt:" + salt);
  // deploy(bytes memory code, bytes32 salt)
  let tx = await contract.deploy(cyberEngineBytecode, salt);
  await tx.wait();
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy-CyberEngine.js
// 通过监听获取与slot相对应的合约地址，之后验证
// npx hardhat verify --network goerli 0xD33d1ad170406dD0e64c8AFF4F5B44e2dE847C73
