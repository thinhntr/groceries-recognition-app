import MainContainer from "./MainContainer";
import { useImageModel } from "../ImageModelProvider";

import { useState } from "react";
import MagicDropZone from "react-magic-dropzone";

import * as tf from "@tensorflow/tfjs";

function ImageRecognizer() {
  const [imageModel, labels] = useImageModel();
  const [preview, setPreview] = useState("");
  const [prediction, setPrediction] = useState();

  function onDrop(accepted, rejected, links) {
    setPreview(accepted[0].preview || links[0]);
  }

  function onImageChange(e) {
    tf.tidy(() => {
      const pixels = tf.browser.fromPixels(e.target);
      const batch = pixels.expandDims();
      const resized = tf.image.resizeBilinear(batch, [224, 224]);
      const predict = imageModel.predict(resized);
      const indexTensor = predict.argMax(-1);
      const index = indexTensor.arraySync()[0];
      const result = labels[index];
      setPrediction(result);
    });
  }

  return (
    <MainContainer className="flex-center overflow-hidden">
      <div className="p-4 transform -rotate-6 max-w-105-screen max-h-105-screen rounded-xl bg-gradient-to-r from-cyan-400 to-light-blue-500">
        <div className="transform rotate-6 square-max-size flex-center flex-col">
          {imageModel ? (
            <MagicDropZone
              className="white-square"
              accept="image/jpeg, image/png, .jpg, .jpeg, .png"
              multiple={false}
              onDrop={onDrop}
            >
              {preview ? (
                <img
                  alt="upload preview"
                  onLoad={onImageChange}
                  className="white-square object-cover"
                  src={preview}
                />
              ) : (
                <div className="white-square flex-center">
                  Choose or drop a file.
                </div>
              )}
            </MagicDropZone>
          ) : (
            <div className="white-square p-4 flex-center">Loading model...</div>
          )}
          <div className="bg-white rounded-b-xl shadow-xl w-96 h-14 max-w-85-screen p-4">
            {prediction}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default ImageRecognizer;
