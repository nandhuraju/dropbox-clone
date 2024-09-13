import React, { useEffect } from "react";

const FileList = ({ contract, files, setFiles }) => {
  useEffect(() => {
    const fetchFiles = async () => {
      if (contract) {
        const fileCount = await contract.fileCount();
        let fileList = [];
        for (let i = 1; i <= fileCount; i++) {
          const file = await contract.files(i);
          fileList.push(file);
        }
        setFiles(fileList);
      }
    };
    fetchFiles();
  }, [contract]);

  return (
    <div className="mt-10">
      <h2 className="text-2xl mb-4">Uploaded Files</h2>
      {files.map((file, index) => (
        <div key={index} className="border rounded p-4 mb-4">
          <p>
            <strong>File Name:</strong> {file.fileName}
          </p>
          <p>
            <strong>File Type:</strong> {file.fileType}
          </p>
          <p>
            <strong>Description:</strong> {file.fileDescription}
          </p>
          <p>
            <strong>Uploaded By:</strong> {file.uploader}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FileList;
