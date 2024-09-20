import React, { useState } from "react";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!fileName || !fileType || !file) {
      alert("Please provide a file, file name, and file type.");
      return;
    }

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const buffer = Buffer.from(reader.result);
      onUpload(fileName, fileType, buffer);
    };
  };

  const fileTypes = [
    { label: "Image (JPEG)", value: "image/jpeg" },
    { label: "Image (PNG)", value: "image/png" },
    { label: "Video (MP4)", value: "video/mp4" },
    { label: "Audio (MP3)", value: "audio/mp3" },
    { label: "PDF (PDF)", value: "application/pdf" },
    { label: "Text (TXT)", value: "text/plain" },
  ];

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
      <select
        value={fileType}
        onChange={(e) => setFileType(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      >
        <option value="" disabled>
          Select File Type
        </option>
        {fileTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
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
