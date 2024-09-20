import React, { useState } from "react";

const FileList = ({ files, onDelete }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewType, setPreviewType] = useState(null); // Track the file type
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFileUrl = (cid) => `https://ipfs.io/ipfs/${cid}`;

  const handleDownload = async (ipfsHash) => {
    try {
      const url = getFileUrl(ipfsHash.replace("ipfs://", ""));
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

  const handleView = (file) => {
    const url = getFileUrl(file.ipfsHash.replace("ipfs://", ""));
    setPreviewUrl(url);
    setPreviewType(file.fileType); // Set the file type for preview
    setIsModalOpen(true);
  };

  const closePreview = () => {
    setIsModalOpen(false);
    setPreviewUrl(null);
    setPreviewType(null);
  };

  const renderPreview = () => {
    if (!previewUrl) return null;

    // Render different previews based on the file type
    if (previewType.startsWith("image/")) {
      return <img src={previewUrl} alt="Preview" className="max-w-full" />;
    } else if (previewType.startsWith("video/")) {
      return (
        <video controls className="max-w-full">
          <source src={previewUrl} type={previewType} />
          Your browser does not support the video tag.
        </video>
      );
    } else if (previewType.startsWith("audio/")) {
      return (
        <audio controls className="w-full">
          <source src={previewUrl} type={previewType} />
          Your browser does not support the audio element.
        </audio>
      );
    } else if (previewType === "application/pdf") {
      return (
        <embed
          src={previewUrl}
          type="application/pdf"
          width="100%"
          height="500px"
        />
      );
    } else if (previewType === "text/plain") {
      return (
        <iframe
          src={previewUrl}
          title="Text Preview"
          className="w-full h-96"
        ></iframe>
      );
    } else {
      return (
        <p className="text-red-500">
          Preview not available for this file type.
        </p>
      );
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
                onClick={() => handleView(file)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                View
              </button>
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

      {/* Preview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full">
            <h3 className="text-xl mb-4">File Preview</h3>
            {renderPreview()}
            <button
              onClick={closePreview}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileList;
