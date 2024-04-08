
require("@nomicfoundation/hardhat-toolbox");
module.exports = {

   networks:{
      sepolia: {
        url: URL,
        accounts: [`0x${PRIVATE_KEY}`],
      },
   },

    solidity:{
      version:"0.8.18",
      settings:{
        optimizer:{
          enabled:true,
          runs:200,
        }
      }
    },
  };
