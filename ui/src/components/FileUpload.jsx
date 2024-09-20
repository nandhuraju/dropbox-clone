import React, { useState } from "react";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const buffer = Buffer.from(reader.result);
      onUpload(fileName, fileType, buffer);
    };
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      <input
        type="text"
        placeholder="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <input
        type="text"
        placeholder="File Type"
        value={fileType}
        onChange={(e) => setFileType(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
