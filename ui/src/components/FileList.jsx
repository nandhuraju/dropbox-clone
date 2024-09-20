import React from "react";

const FileList = ({ files, onDelete }) => {
  const getFileUrl = (cid) => `https://ipfs.io/ipfs/${cid}`;

  const handleDownload = async (ipfsHash) => {
    try {
      const url = `https://ipfs.io/ipfs/${ipfsHash.replace("ipfs://", "")}`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "downloaded-file";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Uploaded Files</h2>
      <ul className="space-y-4">
        {files.map((file, index) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 flex justify-between items-center"
          >
            <div>
              <strong className="text-lg">{file.name}</strong> <br />
              <span className="text-gray-500">{file.fileType}</span>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => handleDownload(file.ipfsHash)}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                Download
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
