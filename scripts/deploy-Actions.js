const { verify } = require("../utils/verify");
const { ethers } = require("hardhat");

async function main() {
  const Actions = await ethers.getContractFactory("Actions");

  console.log(`Deploying... `);
  const actions = await Actions.deploy();

  await actions.deployed();

  console.log(`Actions Contract deployed to ${actions.address}`);

  //const args = [ ];
  await verify(actions.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
