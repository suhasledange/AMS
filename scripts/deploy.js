
const hre = require("hardhat");

async function main() {
  

  const AMS = await hre.ethers.getContractFactory('AMS');
  console.log('Deploying AMS...');
  
  const ams = await AMS.deploy();
  
  await ams.deployed();

  console.log(
    `AMS deployed to ${ams.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
