import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/images")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {images.map((img, idx) => (
        <div key={idx} style={{ width: "220px", border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
          <img src={img.src} alt={img.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <div style={{ padding: "10px", textAlign: "center" }}>
            <h4>{img.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
