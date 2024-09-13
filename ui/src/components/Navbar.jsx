import React from "react";

const Navbar = ({ currentAccount, connectWallet }) => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">DStorage</h1>
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {currentAccount
            ? `Connected: ${currentAccount.slice(
                0,
                6
              )}...${currentAccount.slice(-4)}`
            : "Connect to MetaMask"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
