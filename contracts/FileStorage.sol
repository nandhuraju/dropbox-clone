// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DStorage {
    // File structure
    struct File {
        string name;
        string fileType;
        string ipfsHash;
        address uploader;
        uint256 timestamp;
    }

    // Mapping from user addresses to their uploaded files
    mapping(address => File[]) public files;

    // Event to be emitted when a new file is uploaded
    event FileUploaded(
        address indexed uploader,
        string name,
        string fileType,
        string ipfsHash,
        uint256 timestamp
    );

    // Upload a file to the smart contract (IPFS hash stored in blockchain)
    function uploadFile(
        string memory _name,
        string memory _fileType,
        string memory _ipfsHash
    ) public {
        require(bytes(_name).length > 0, "File name is required.");
        require(bytes(_fileType).length > 0, "File type is required.");
        require(bytes(_ipfsHash).length > 0, "IPFS hash is required.");

        // Add file to the user's storage
        files[msg.sender].push(
            File({
                name: _name,
                fileType: _fileType,
                ipfsHash: _ipfsHash,
                uploader: msg.sender,
                timestamp: block.timestamp
            })
        );

        // Emit the file uploaded event
        emit FileUploaded(msg.sender, _name, _fileType, _ipfsHash, block.timestamp);
    }

    // Retrieve all files uploaded by a specific user
    function getFilesByUser(address _user) public view returns (File[] memory) {
        return files[_user];
    }

    // Remove a specific file by index
    function removeFile(uint256 _index) public {
        require(_index < files[msg.sender].length, "Invalid index.");
        
        // Remove the file by shifting the array left
        for (uint256 i = _index; i < files[msg.sender].length - 1; i++) {
            files[msg.sender][i] = files[msg.sender][i + 1];
        }
        
        // Delete the last file
        files[msg.sender].pop();
    }
}
