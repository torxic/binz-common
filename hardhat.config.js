// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
   solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.0",
      },
    ],
  },
   networks: {
      polygon: {
         url: process.env.INFURA_API_URL,
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      localhost: {
         url: "http://127.0.0.1:8545",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   }
};
