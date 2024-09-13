const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DStorageModule", (m) => {
  const dstorage = m.contract("DStorage");
  return { dstorage };
});
