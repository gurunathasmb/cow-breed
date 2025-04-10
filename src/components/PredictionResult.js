import React from "react";

const PredictionResult = ({ previewUrl, prediction, loading }) => {
  return (
    <div className="mt-6 text-center">
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-64 h-auto object-cover rounded shadow-md mx-auto"
        />
      )}
      {loading && <p className="mt-4 text-blue-600 font-medium">Predicting...</p>}
      {!loading && prediction && (
        <p className="mt-4 text-xl font-semibold">
          Prediction: <span className="text-green-600">{prediction}</span>
        </p>
      )}
    </div>
  );
};

export default PredictionResult;
