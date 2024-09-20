require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "infurasep",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    infurasep: {
      url: "https://sepolia.infura.io/v3/dfb57f151dd44ce682998e1e3defb5e3",
      accounts: [
        "4d670fdd272db9538a3f2176003058c29f156ef644b244bccaf0d52a948ca2f0",
      ],
    },
  },
  solidity: "0.8.20",
};
