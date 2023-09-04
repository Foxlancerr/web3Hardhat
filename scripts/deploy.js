const hre = require("hardhat");

async function main() {
  // Assuming "User" is the name of the contract you want to deploy
  const User = await hre.ethers.getContractFactory("User");
  const lock = await User.deploy(); // Adjust the arguments based on the constructor of your contract

  await lock.deployed();

  console.log(
    `Lock with ETH and unlock timestamp deployed to ${lock.address}`
  );
}

main().catch((error) => {
  console.error(error);
});
















