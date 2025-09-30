import { useState } from "react";

export default function SubirImagen() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return setMessage("Selecciona un archivo primero");

    const formData = new FormData();
    formData.append("imagenes", file);

    try {
      const res = await fetch("http://localhost:3000/imagenes", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessage(`Imagen subida: ${data.url}`);
    } catch (err) {
      console.error(err);
      setMessage("Error al subir la imagen");
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Subir
      </button>
      <p>{message}</p>
    </div>
  );
}
