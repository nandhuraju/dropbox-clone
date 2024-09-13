// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DStorage {
    string public name = 'DStorage';
    uint public fileCount = 0;
    mapping(uint => File) public files;

    struct File {
        uint fileId;
        string fileHash;
        uint fileSize;
        string fileType;
        string fileName;
        string fileDescription;
        uint uploadTime;
        address payable uploader;
    }

    event FileUploaded(
        uint fileId,
        string fileHash,
        uint fileSize,
        string fileType,
        string fileName, 
        string fileDescription,
        uint uploadTime,
        address payable uploader
    );

    // Constructor no longer needs visibility specifier in Solidity 0.8.x
    constructor() {
    }

    function uploadFile(
        string memory _fileHash, 
        uint _fileSize, 
        string memory _fileType, 
        string memory _fileName, 
        string memory _fileDescription
    ) 
        public 
    {
        // Make sure the file hash exists
        require(bytes(_fileHash).length > 0, "File hash is required.");
        // Make sure file type exists
        require(bytes(_fileType).length > 0, "File type is required.");
        // Make sure file description exists
        require(bytes(_fileDescription).length > 0, "File description is required.");
        // Make sure file name exists
        require(bytes(_fileName).length > 0, "File name is required.");
        // Make sure uploader address exists
        require(msg.sender != address(0), "Invalid uploader address.");
        // Make sure file size is more than 0
        require(_fileSize > 0, "File size must be greater than zero.");

        // Increment file id
        fileCount++;

        // Add File to the contract
        files[fileCount] = File(
            fileCount, 
            _fileHash, 
            _fileSize, 
            _fileType, 
            _fileName, 
            _fileDescription, 
            block.timestamp, // Replacing 'now' with 'block.timestamp'
            payable(msg.sender)
        );

        // Trigger an event
        emit FileUploaded(
            fileCount, 
            _fileHash, 
            _fileSize, 
            _fileType, 
            _fileName, 
            _fileDescription, 
            block.timestamp, 
            payable(msg.sender)
        );
    }
}
