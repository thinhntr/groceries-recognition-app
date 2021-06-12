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
    <MainContainer className="pt-16 flex flex-col items-center">
      <div className="p-4 max-w-80-screen max-h-80-screen transform -rotate-6 rounded-xl bg-gradient-to-r from-cyan-400 to-light-blue-500">
        <div class="transform rotate-6 flex flex-col justify-center items-center">
          {model ? (
            <MagicDropZone
              className="bg-white rounded-t-xl w-96 h-96 max-w-80-screen max-h-80-screen"
              accept="image/jpeg, image/png, .jpg, .jpeg, .png"
              multiple={false}
              onDrop={onDrop}
            >
              <div className="flex justify-center items-center w-96 h-96 max-w-80-screen max-h-80-screen">
                {preview ? (
                  <img
                    alt="upload preview"
                    onLoad={onImageChange}
                    className="rounded-t-xl w-96 h-96 max-w-80-screen max-h-80-screen object-cover"
                    src={preview}
                  />
                ) : (
                  <div>Choose or drop a file.</div>
                )}
              </div>
            </MagicDropZone>
          ) : (
            <div className="bg-white w-96 h-96 max-w-80-screen max-h-80-screen p-4 rounded-t-xl flex justify-center items-center">
              Loading model...
            </div>
          )}
          <div className="bg-white rounded-b-xl p-4 w-96 max-w-80-screen">
            {predictions}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default ImageRecognizer;
