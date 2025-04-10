import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import PredictionResult from "./components/PredictionResult";

function App() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setPrediction(data.breed || "Unknown");
    } catch (err) {
      console.error("Upload error:", err);
      setPrediction("Error predicting breed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Cow Breed Classifier 🐄</h1>
      <UploadForm
        setFile={setFile}
        setPreviewUrl={setPreviewUrl}
        handleUpload={handleUpload}
      />
      <PredictionResult
        previewUrl={previewUrl}
        prediction={prediction}
        loading={loading}
      />
    </div>
  );
}

export default App;
