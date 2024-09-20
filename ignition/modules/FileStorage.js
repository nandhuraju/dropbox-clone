const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FileStorageModule", (m) => {
  // Deploy the DStorage contract from FileStorage.sol
  const dstorage = m.contract("DStorage");

  // Return the deployed contract instance
  return { dstorage };
});
