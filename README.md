# 📦 Dropbox Clone DApp

This project is a decentralized application (DApp) that replicates core Dropbox functionality on the Ethereum blockchain. Users can upload, preview, view, and delete files with the help of smart contracts, decentralized storage (IPFS), and blockchain-based file management.

## 🚀 Features

- **MetaMask Wallet Integration**: Users can connect to the Ethereum blockchain via MetaMask.
- **File Upload**: Upload files directly to IPFS and store the file information (name, type, hash) on the Ethereum blockchain.
- **File Listing**: View files associated with your account from the blockchain.
- **File Preview**: Preview files (images, videos, PDFs) directly in the browser.
- **File Deletion**: Remove files from your account through a smart contract transaction.
- **IPFS for Decentralized Storage**: Files are stored securely on IPFS via the Thirdweb SDK.

## 🛠️ Tech Stack

### Frontend
- **React**: UI components and frontend interactions
- **Vite**: Fast development build and bundler
- **Tailwind CSS**: CSS framework for rapid styling
- **Ethers.js**: Ethereum library for interacting with the blockchain
- **MetaMask**: Wallet for connecting to the Ethereum network

### Backend
- **Solidity**: Smart contract development
- **Ethereum**: Blockchain network for contract deployment
- **Hardhat**: Ethereum development environment and testing framework
- **Thirdweb SDK**: For IPFS integration and file storage

### Smart Contract

- **Upload File**: Stores file metadata (name, type, IPFS hash) on the blockchain.
- **Get Files**: Retrieves file information stored for a specific user.
- **Delete File**: Removes file metadata from the blockchain and user account.

## 📝 Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **MetaMask**: Install the [MetaMask](https://metamask.io/) extension for your browser.
- **Infura Account**: Set up an account at [Infura](https://infura.io/) to connect to Ethereum networks.
- **Thirdweb Account**: Register for a [Thirdweb](https://thirdweb.com/) account to manage IPFS storage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/dropbox-clone-dapp.git

##
2. Install dependencies:
   ```bash
   npm install

##
3. Create a .env file in root folder:
   ```bash
   INFURA_SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
   ACCOUNT_PRIVATE_KEY=YOUR_PRIVATE_KEY

##
4. Create a .env file in ui folder:
   ```bash
   THIRDWEB_CLIENT_ID=your-client-id
   THIRDWEB_CLIENT_SECRET=your-client-secret

##
5. Run the frontend:
   ```bash
   cd ui
   npm run dev

## Demo Video

[![Demo](https://icons.iconarchive.com/icons/iconsmind/outline/256/Youtube-icon.png)](https://youtu.be/sJHGTyBMiNo)

## 📦 Usage

Connect MetaMask, upload files to IPFS, view/download them, or delete.

## 🛡️ Security

Keep private keys and sensitive info in .env (never expose them).

## 🔮 Planned Updates

Multiple File Upload: Allow users to upload multiple files at once instead of one at a time.
File Sharing: Implement functionality for users to share files with other wallet addresses.
Search and Filter Files: Add a search bar and filters for file types and names to easily navigate large file collections.
User Profile and Settings: Allow users to view and edit their profile, with additional options for configuring their DApp experience.

## 🎗️ Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request. Make sure to follow the steps below:

1. Fork the Project.
2. Create a Feature Branch (git checkout -b feature/<feature_name>).
3. Commit your changes (git commit -m 'Add <feature_name>').
4. Push to the branch (git push origin feature/<feature_name>).
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/nandhuraju/ChainCerts/blob/main/License.txt) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)


