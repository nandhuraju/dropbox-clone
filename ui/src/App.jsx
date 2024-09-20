import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import {
  contractAddress,
  contractABI,
  thirdwebClientId,
  thirdwebClientSecret,
} from "./config";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";

const App = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [files, setFiles] = useState([]);

  // Initialize Thirdweb storage with client ID and secret
  const storage = new ThirdwebStorage({
    clientId: thirdwebClientId,
    clientSecret: thirdwebClientSecret,
  });

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      setContract(contractInstance);
    } else {
      alert("MetaMask is not installed.");
    }
  };

  const logout = () => {
    setAccount(null);
    setContract(null);
    setFiles([]); // Clear files if needed
  };

  const loadFiles = async () => {
    if (contract && account) {
      const filesFromContract = await contract.getFilesByUser(account);
      setFiles(filesFromContract);
    }
  };

  useEffect(() => {
    if (contract && account) {
      loadFiles();
    }
  }, [contract, account]);

  const uploadFile = async (fileName, fileType, fileBuffer) => {
    try {
      const ipfsHash = await storage.upload(fileBuffer);
      const transaction = await contract.uploadFile(
        fileName,
        fileType,
        ipfsHash
      );
      await transaction.wait();
      loadFiles(); // Reload files after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const deleteFile = async (index) => {
    try {
      const transaction = await contract.removeFile(index);
      await transaction.wait();
      loadFiles(); // Reload files after deletion
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8 flex justify-center items-center space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1024px-Dropbox_Icon.svg.png?20151210150256"
          alt="Dropbox Logo"
          className="w-10 h-10"
        />
        <span>Dropbox Clone DApp</span>
      </h1>
      <div className="text-center">
        {!account ? (
          <button
            onClick={connectWallet}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Connect to MetaMask
          </button>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">Connected: {account}</p>
            <button
              onClick={logout}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="mt-8">
        <FileUpload onUpload={uploadFile} />
      </div>
      <div className="mt-8">
        <FileList files={files} onDelete={deleteFile} />
      </div>
    </div>
  );
};

export default App;
