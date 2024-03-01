require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };
// https://rpc-mumbai.maticvigil.com/v1/8abfc6b12eef6004bddef179307826aea3ddb97d
const PRIVATE_KEY = "ec7c026af1128373e9ed6ab98189792a3f07e043d3435029fce99d9beb171bcc"
const RPC_URL="https://rpc-mumbai.maticvigil.com"
module.exports = {

   defaultNetwork:"polygon_mumbai",
   networks:{
      hardhat:{
        chainID:80001,
      },
      polygon_mumbai:{
        url:"https://rpc-mumbai.maticvigil.com",
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