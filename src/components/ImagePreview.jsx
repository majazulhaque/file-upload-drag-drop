import { useEffect, useState } from "react";

export default function ImagePreview({ currentImg, onDelete }) {
  const [img, setImg] = useState("");
  const createImage = () => {
    const updateImg = URL.createObjectURL(currentImg);
    setImg(updateImg);
  };
  useEffect(() => {
    createImage();
  }, []);

  return (
    <div className="image-preview">
      <div className="image-preview-container">
        <img src={img} alt="" />
        <div className="image-detail-name">
          <span className="name">{currentImg.name}</span>
          <span className="size">{(currentImg.size / 1024).toFixed(2)}kb</span>
        </div>
      </div>
      <button onClick={onDelete}>X</button>
    </div>
  );
}
