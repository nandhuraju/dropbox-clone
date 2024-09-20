require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load .env variables

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "infurasep",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    infurasep: {
      url: process.env.INFURA_SEPOLIA_URL, // Use environment variable for URL
      accounts: [process.env.ACCOUNT_PRIVATE_KEY], // Use environment variable for private key
    },
  },
  solidity: "0.8.20",
};
