import { useState } from "react";
import axios from "axios";

const AddPicture = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <>
      <h2>Dodaj zdjęcie do galerii</h2>
      <div>
        <label>
          <input
            type="file"
            hidden
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                setSelectedImage(URL.createObjectURL(file));
                setSelectedFile(file);
              }
            }}
          />
          <div>
            {selectedImage ? (
              <img alt="wybrana fota" /> // src={selectedImage}
            ) : (
              <span>Choose image</span>
            )}
          </div>
        </label>
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? "Dodawanie..." : "Dodano!"}
        </button>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default AddPicture;
