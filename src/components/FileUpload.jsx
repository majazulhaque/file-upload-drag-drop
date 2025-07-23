import { useState } from "react";
import ImagePreview from "./ImagePreview";

export default function FileUpload() {
  const [file, setFile] = useState([]);
  const [drag, setDrag] = useState(false);
  const handleChange = (e) => {
    const newFile = e.target.files;
    setFile([...file, ...newFile]);
  };

  const handleDelete = (img) => {
    let newFile = [...file];
    newFile = newFile.filter((i) => i.name !== img.name);
    setFile(newFile);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const handleDragEnd = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dragFiles = e?.dataTransfer?.files;
    let newFiles = [...file];
    newFiles = [...newFiles, ...dragFiles];
    setFile(newFiles);
  };
  return (
    <div className="container">
      <div className="file-upload-container">
        <h2>React File Uploader</h2>
        <div
          className={`upload-box ${drag ? "drag" : ""}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragEnd}
          onDrop={handleDrop}
          onDragOver={handleDragEnter}
        >
          <span>Drag and Drop File here or</span>
          <input
            type="file"
            multiple
            id="file-upload"
            onChange={handleChange}
          />
          <label htmlFor="file-upload">Browser Files</label>
        </div>
      </div>
      <div className="preview-container">
        {file.map((img) => {
          return (
            <ImagePreview
              key={img.name}
              currentImg={img}
              onDelete={() => handleDelete(img)}
            />
          );
        })}
      </div>
    </div>
  );
}
