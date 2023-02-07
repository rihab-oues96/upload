import { useState } from "react";
import Upload from "../../assets/icons/Upload.svg";

import "./FileInputPage.scss";

const FileInputPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
      }
    });
    setUploadedFiles(uploaded);
    console.log(uploaded);
  };

  const handleFileEvent = (event) => {
    const chosenFiles = Array.prototype.slice.call(event.target.files);
    handleUploadFiles(chosenFiles);
  };

  return (
    <div className="upload">
      <img src={Upload} alt="upload" />
      <form>
        <input
          type="file"
          multiple
          className="upload-input"
          onChange={handleFileEvent}
        />
      </form>

      <div className="test">
        {uploadedFiles.map((file) => (
          <div>{file.name} </div>
        ))}
      </div>
    </div>
  );
};

export default FileInputPage;

/* import { useState, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import Upload from "../../assets/icons/Upload.svg";

import "./FileInputPage.scss";

const FileInputPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  const fileListref = ref(storage, "files/");

  const upLoadFile = () => {
    if (selectedFile == null) return;

    const fileref = ref(storage, `files/${selectedFile.name + v4()}`); //v4 for minimise names
    uploadBytes(fileref, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(fileListref).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <div className="upload" htmlfor="upload">
        <img src={Upload} alt="upload" />
        <input
          id="upload"
          type="file"
          onChange={changeHandler}
          onClick={upLoadFile}
          hidden
        />
        <label>Upload</label>
      </div>

      {fileList.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
};

export default FileInputPage; */
