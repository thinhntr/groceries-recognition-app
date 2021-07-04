import { useEffect, useState, createContext, useContext } from "react";

import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

const ImageModelContext = createContext();

export function useImageModel() {
  return useContext(ImageModelContext);
}

export default function ImageModelProvider({ children }) {
  const [imageModel, setImageModel] = useState(null);
  const [labels, setLabels] = useState(null);

  const url = "https://modelhosting.web.app/";
  const version = "thinh_imagemodel_2";

  useEffect(() => {
    loadGraphModel(url + version + "/model.json").then((loadedModel) => {
      setImageModel(loadedModel);
      // console.log("Model loaded successfully");
      // console.log("Loaded Model: ", loadedModel);
      // console.log("onImageChange", tf.memory());
    });

    fetch(url + version + "/labels.json")
      .then((response) => response.json())
      .then((data) => {
        setLabels(data);
        // console.log("Data downloaded successfully");
        // console.log("Loaded data", data);
      });
  }, []);

  return (
    <ImageModelContext.Provider value={[imageModel, labels]}>
      {children}
    </ImageModelContext.Provider>
  );
}
