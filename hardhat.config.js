require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };
const PRIVATE_KEY = "ec7c026af1128373e9ed6ab98189792a3f07e043d3435029fce99d9beb171bcc"
const URL="https://sepolia.infura.io/v3/047abb4be9a143bd8fb3dc8142d2fedf"
module.exports = {

   networks:{
      sepolia: {
        url: URL,
        accounts: [PRIVATE_KEY],
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