import React from "react";

const UploadForm = ({ setFile, setPreviewUrl, handleUpload }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const selected = e.target.files[0];
          if (selected) {
            setFile(selected);
            setPreviewUrl(URL.createObjectURL(selected));
          }
        }}
        className="block"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Predict
      </button>
    </div>
  );
};

export default UploadForm;
