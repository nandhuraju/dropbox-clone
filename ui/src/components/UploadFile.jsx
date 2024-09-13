import React, { useState } from "react";
import { create } from "ipfs-http-client"; // Import IPFS client

const ipfs = create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

const UploadFile = ({ contract, currentAccount }) => {
  const [file, setFile] = useState(null);
  const [fileDetails, setFileDetails] = useState({
    fileHash: "",
    fileSize: 0,
    fileType: "",
    fileName: "",
    fileDescription: "",
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Select the file
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFileDetails({ ...fileDetails, [name]: value });
  };

  const uploadToIPFS = async () => {
    try {
      const added = await ipfs.add(file); // Upload file to IPFS
      return added.path; // Return the file hash
    } catch (error) {
      console.error("Error uploading file to IPFS:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract || !currentAccount) {
      alert("Please connect to MetaMask.");
      return;
    }

    // Upload the file to IPFS and get the file hash
    const fileHash = await uploadToIPFS();
    if (!fileHash) return;

    try {
      const { fileSize, fileType, fileName, fileDescription } = fileDetails;

      // Convert file size to bytes
      const fileSizeInBytes = file.size;

      const tx = await contract.uploadFile(
        fileHash,
        fileSizeInBytes,
        fileType,
        fileName,
        fileDescription
      );
      await tx.wait();
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file to DStorage contract:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4">Upload File</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          name="fileName"
          placeholder="File Name"
          value={fileDetails.fileName}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          name="fileType"
          placeholder="File Type"
          value={fileDetails.fileType}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          name="fileDescription"
          placeholder="File Description"
          value={fileDetails.fileDescription}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadFile;
