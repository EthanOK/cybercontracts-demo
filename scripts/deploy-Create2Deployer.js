const { verify } = require("../utils/verify");
const { ethers } = require("hardhat");

async function main() {
  const Create2Deployer = await ethers.getContractFactory("Create2Deployer");

  console.log(`Deploying... `);
  const create2 = await Create2Deployer.deploy();

  await create2.deployed();

  console.log(`Create2Deployer Contract deployed to ${create2.address}`);

  // const args = [owner, authority];
  await verify(create2.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
