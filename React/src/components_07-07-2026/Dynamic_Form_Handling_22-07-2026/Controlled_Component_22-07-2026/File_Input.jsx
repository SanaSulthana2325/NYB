import { useState } from "react";

function File_Input() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="border border-black p-2 rounded w-64"

      />

      <h3>Selected File:</h3>

      <p>{fileName}</p>
    </div>
  );
}

export default File_Input;