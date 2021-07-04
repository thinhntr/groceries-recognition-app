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
    width: 224,
    height: 224,
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
        const batch = pixels.expandDims();
        const fbatch = tf.cast(batch, "float32");
        const predict = imageModel.predict(fbatch);
        const index = predict.argMax(-1).dataSync()[0];
        const result = labels[index];
        setPrediction(result);
      });
    }, 10);
  }, [imageModel, labels]);

  return (
    <MainContainer className="flex-center">
      <div className="m-4 p-4 max-w-screen-md transform rotate-6 rounded-xl bg-gradient-to-r from-cyan-400 to-light-blue-500">
        <div className="max-w-screen-sm transform -rotate-6 rounded-xl p-8 flex-center flex-col">
          {enabled ? (
            <Webcam
              ref={webcamRef}
              className="white-square bg-transparent"
              audio={false}
              videoConstraints={videoConstraints}
            />
          ) : (
            <div className="white-square bg-gray-200"></div>
          )}
          <div className="bg-white rounded-b-xl shadow-xl w-96 h-14 max-w-85-screen p-4">
            {prediction}
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex items-center h-6 rounded-full w-11 m-2`}
          >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>
    </MainContainer>
  );
}

export default VideoRecognizer;
