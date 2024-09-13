// Main.jsx
import React from "react";
import moment from "moment";

const Main = ({ files, captureFile, uploadFile }) => {
  const convertBytes = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const description = event.target.fileDescription.value;
    uploadFile(description);
  };

  return (
    <div className="container-fluid mt-5 text-center">
      <div className="row">
        <main
          role="main"
          className="col-lg-12 ml-auto mr-auto"
          style={{ maxWidth: "1024px" }}
        >
          <div className="content">
            <p>&nbsp;</p>
            <div
              className="card mb-3 mx-auto bg-dark"
              style={{ maxWidth: "512px" }}
            >
              <h2 className="text-white text-monospace bg-dark">
                <b>
                  <ins>Share File</ins>
                </b>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <br />
                  <input
                    id="fileDescription"
                    type="text"
                    className="form-control text-monospace"
                    placeholder="description..."
                    required
                  />
                </div>
                <input
                  type="file"
                  onChange={captureFile}
                  className="text-white text-monospace"
                />
                <button type="submit" className="btn-primary btn-block">
                  <b>Upload!</b>
                </button>
              </form>
            </div>
            <p>&nbsp;</p>
            <table
              className="table-sm table-bordered text-monospace"
              style={{ width: "1000px", maxHeight: "450px" }}
            >
              <thead style={{ fontSize: "15px" }}>
                <tr className="bg-dark text-white">
                  <th scope="col" style={{ width: "10px" }}>
                    id
                  </th>
                  <th scope="col" style={{ width: "200px" }}>
                    name
                  </th>
                  <th scope="col" style={{ width: "230px" }}>
                    description
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    type
                  </th>
                  <th scope="col" style={{ width: "90px" }}>
                    size
                  </th>
                  <th scope="col" style={{ width: "90px" }}>
                    date
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    uploader/view
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    hash/view/get
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "12px" }}>
                {files.map((file, key) => (
                  <tr key={key}>
                    <td>{file.fileId}</td>
                    <td>{file.fileName}</td>
                    <td>{file.fileDescription}</td>
                    <td>{file.fileType}</td>
                    <td>{convertBytes(file.fileSize)}</td>
                    <td>
                      {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                    </td>
                    <td>
                      <a
                        href={"https://etherscan.io/address/" + file.uploader}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {file.uploader.substring(0, 10)}...
                      </a>
                    </td>
                    <td>
                      <a
                        href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {file.fileHash.substring(0, 10)}...
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
