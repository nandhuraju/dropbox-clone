# 📦 Dropbox Clone DApp

A decentralized Dropbox-like application (DApp) built on Ethereum that allows users to securely upload, view, download, and delete files on IPFS (InterPlanetary File System) via a smart contract. MetaMask is used for authentication and interaction with the Ethereum blockchain, and Thirdweb is integrated for IPFS storage.

## 🚀 Features

- **Connect to MetaMask**: Users can securely log in using their MetaMask wallet.
- **Upload Files**: Upload files to IPFS, and store their metadata on the blockchain.
- **View and Download Files**: View a list of uploaded files and download them from IPFS.
- **Delete Files**: Remove files from the DApp, with the changes reflected on the blockchain.
  
## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Smart Contract**: Solidity, Hardhat
- **Blockchain Interaction**: Ethers.js, MetaMask
- **IPFS Storage**: Thirdweb
- **Ethereum Test Network**: Sepolia via Infura

## 📝 Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **MetaMask**: Install the [MetaMask](https://metamask.io/) extension for your browser.
- **Infura Account**: Set up an account at [Infura](https://infura.io/) to connect to Ethereum networks.
- **Thirdweb Account**: Register for a [Thirdweb](https://thirdweb.com/) account to manage IPFS storage.

## 📂 Project Structure

```bash
.
├── public                  # Public assets
├── src                     # Source files
│   ├── components          # React components (FileUpload, FileList)
│   ├── App.jsx             # Main app component
│   ├── config.js           # Configuration file for contract and thirdweb credentials
│   ├── contract            # Smart contract logic
├── .env                    # Environment variables for sensitive data
├── hardhat.config.js        # Hardhat configuration for deployment
├── README.md               # Project documentation
├── package.json            # Node.js dependencies
└── tailwind.config.js      # Tailwind CSS configuration
