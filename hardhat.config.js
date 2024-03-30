const { conf } = require("./util/conf");

require("@nomicfoundation/hardhat-toolbox");


module.exports = {

   networks:{
      sepolia: {
        url: conf.URL,
        accounts: [conf.PRIVATE_KEY],
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