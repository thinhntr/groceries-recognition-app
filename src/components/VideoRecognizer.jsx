import { useState, useRef, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useImageModel } from "../ImageModelProvider";
import Webcam from "react-webcam";

import * as tf from "@tensorflow/tfjs";

import MainContainer from "./MainContainer";

function VideoRecognizer() {
  const webcamRef = useRef(null);

  const [imageModel, labels] = useImageModel();
  const [enabled, setEnabled] = useState(false);
  const [prediction, setPrediction] = useState("");

  const videoConstraints = {
    width: 1000,
    height: 1000,
    facingMode: "environment",
  };

  useEffect(() => {
    setInterval(() => {
      if (
        !imageModel ||
        webcamRef.current === null ||
        webcamRef.current.video.readyState !== 4
      ) {
        return;
      }
      tf.tidy(() => {
        const pixels = tf.browser.fromPixels(webcamRef.current.video);
        const resized = tf.image.resizeBilinear(pixels, [224, 224]);
        const batch = resized.expandDims();
        const fbatch = tf.cast(batch, "float32");
        const predict = imageModel.predict(fbatch);
        const index = predict.argMax(-1).dataSync()[0];
        const result = labels[index];
        setPrediction(result);
      });
    }, 10);
  }, [imageModel, labels]);

  return (
    <MainContainer>
      <div className="p-4 flex-shrink transform rotate-6 max-w-105-screen rounded-xl bg-gradient-to-r from-cyan-400 to-light-blue-500">
        <div className="transform -rotate-6 rounded-xl flex-center flex-col">
          {imageModel && enabled ? (
            <Webcam
              ref={webcamRef}
              className="white-square bg-transparent"
              audio={false}
              videoConstraints={videoConstraints}
            />
          ) : (
            <div className="white-square p-4 flex-center">
              {!imageModel
                ? "Loading model..."
                : !enabled
                ? "Turn on the camera"
                : ""}
            </div>
          )}
          <div className="text-white text-lg text-center bg-black bg-opacity-25 backdrop-filter backdrop-blur-md rounded-b-xl shadow-xl w-96 min-h-14 max-w-85-screen p-4">
            {prediction}
          </div>
        </div>
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled
            ? "bg-gradient-to-r from-green-500 to-blue-600"
            : "bg-gray-200"
        } relative inline-flex items-center h-10 rounded-full w-20 m-2`}
      >
        <span
          className={`${
            enabled ? "translate-x-12" : "translate-x-1"
          } inline-block w-7 h-7 transform bg-white rounded-full`}
        />
      </Switch>
    </MainContainer>
  );
}

export default VideoRecognizer;
