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

## ⚙️ Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nandhuraju/dropbox-clone.git
   cd dropbox-clone-dapp

2. **Install dependencies:**:
 
  ```bash
    
    npm install
    Create a .env file:

2. **Install dependencies:**:
 
  ```bash

INFURA_SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
ACCOUNT_PRIVATE_KEY=YOUR_PRIVATE_KEY
THIRDWEB_CLIENT_ID=your-client-id
THIRDWEB_CLIENT_SECRET=your-client-secret

Compile & deploy the contract:

2. **Install dependencies:**:
  ```bash

npx hardhat compile
npx hardhat run scripts/deploy.js --network infurasep
Run the frontend:

2. **Install dependencies:**:
  ```bash

npm run dev

## 📦 Usage
Connect MetaMask, upload files to IPFS, view/download them, or delete.
## 🛡️ Security
Keep private keys and sensitive info in .env (never expose them).
## 👨‍💻 Author
Your Name - GitHub
## 📝 License
This project is licensed under the MIT License.
