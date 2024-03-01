require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };
// https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K
const PRIVATE_KEY = "ec7c026af1128373e9ed6ab98189792a3f07e043d3435029fce99d9beb171bcc"
const RPC_URL="https://rpc.ankr.com/polygon_mumbai"
module.exports = {


   defaultNetwork:"polygon_mumbai",
   networks:{
      hardhat:{
        chainID:80001,
      },
      polygon_mumbai:{
        url:"https://rpc.ankr.com/polygon_mumbai",
        accounts:[`0x${PRIVATE_KEY}`],
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