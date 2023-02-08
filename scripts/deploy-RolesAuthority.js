const { verify } = require("../utils/verify");
const { ethers } = require("hardhat");

async function main() {
  const Roles = await ethers.getContractFactory("RolesAuthority");
  const owner = "0x6278A1E803A76796a3A1f7F6344fE874ebfe94B2";
  const authority = "0x0000000000000000000000000000000000000000";
  console.log(`Deploying... `);
  const roles = await Roles.deploy(owner, authority);

  await roles.deployed();

  console.log(`Roles Contract deployed to ${roles.address}`);

  const args = [owner, authority];
  await verify(roles.address, args);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
