const { verify } = require("../utils/verify");
const { ethers } = require("hardhat");

async function main() {
  const CYBER = await ethers.getContractFactory("CYBER");
  const owner = "0x6278A1E803A76796a3A1f7F6344fE874ebfe94B2";
  const to = "0x53188E798f2657576c9de8905478F46ac2f24b67";
  console.log(`Deploying... `);
  const cyber = await CYBER.deploy(owner, to);

  await cyber.deployed();

  console.log(`CYBER Contract deployed to ${cyber.address}`);

  const args = [owner, to];
  await verify(cyber.address, args);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
