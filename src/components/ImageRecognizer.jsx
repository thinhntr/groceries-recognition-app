import MainContainer from "./MainContainer";
import { useState, useEffect } from "react";
import MagicDropZone from "react-magic-dropzone";

import * as tf from "@tensorflow/tfjs";

const labels = require("./labels.json");

function ImageRecognizer() {
  const [model, setModel] = useState(null);
  const [preview, setPreview] = useState("");
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    tf.loadLayersModel(
      "https://groceries-recognition.web.app/image_model/model.json"
    ).then((loadedModel) => {
      setModel(loadedModel);
      console.log("Model loaded successfully");
      console.log("Loaded Model: ", loadedModel);
      // console.log("BEGIN");
      // const a = tf.tensor([1]).arraySync()[0];
      // const b = ["Kyle", "Alex"];
      // console.dir(b[a]);
      // console.log("END");
    });
  }, []);

  function onDrop(accepted, rejected, links) {
    setPreview(accepted[0].preview || links[0]);
  }

  async function onImageChange(e) {
    const pixels = tf.browser.fromPixels(e.target);
    const reshapedPixels = pixels.reshape([1, ...pixels.shape]);
    const croppedPixels = tf.image.resizeBilinear(reshapedPixels, [224, 224]);
    const predictIndex = model.predict(croppedPixels).argMax(-1).arraySync()[0];
    // setPredictions(top3);
    const result = labels[predictIndex];
    setPredictions(result);
    console.log(result);
    // console.log("Predict Result", predictions.toString());
  }

  return (
    <MainContainer>
      {model ? (
        <MagicDropZone
          className="Dropzone"
          accept="image/jpeg, image/png, .jpg, .jpeg, .png"
          multiple={false}
          onDrop={onDrop}
        >
          <div className="Dropzone-content">
            {preview ? (
              <img
                alt="upload preview"
                onLoad={onImageChange}
                className="Dropzone-img w-96 h-96 rounded-md"
                src={preview}
              />
            ) : (
              "Choose or drop a file."
            )}
          </div>
        </MagicDropZone>
      ) : (
        <div className="Dropzone">Loading model...</div>
      )}
      <div>{predictions}</div>
    </MainContainer>
  );
}

export default ImageRecognizer;
