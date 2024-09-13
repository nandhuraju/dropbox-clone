import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Navbar from "./components/Navbar";
import UploadFile from "./components/UploadFile";
import FileList from "./components/FileList";
import DStorageABI from "./scdata/DStorage.json";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (window.ethereum) {
      connectToContract();
    }
  }, []);

  const connectToContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; 
    const dStorageContract = new ethers.Contract(
      contractAddress,
      DStorageABI.abi,
      signer
    );
    setContract(dStorageContract);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } else {
      alert("MetaMask is not installed.");
    }
  };

  return (
    <div>
      <Navbar currentAccount={currentAccount} connectWallet={connectWallet} />
      <UploadFile contract={contract} currentAccount={currentAccount} />
      <FileList contract={contract} files={files} setFiles={setFiles} />
    </div>
  );
};

export default App;
