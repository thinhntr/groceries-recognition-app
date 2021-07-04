import { useEffect, useState, createContext, useContext } from "react";

import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

const ImageModelContext = createContext();

export function useImageModel() {
  return useContext(ImageModelContext);
}

export default function ImageModelProvider({ children }) {
  const [imageModel, setImageModel] = useState(null);

  useEffect(() => {
    loadGraphModel(
      "https://modelhosting.web.app/thinh_imagemodel_3/model.json"
    ).then((loadedModel) => {
      setImageModel(loadedModel);
      console.log("Model loaded successfully");
      console.log("Loaded Model: ", loadedModel);
      console.log("onImageChange", tf.memory());
    });
  }, []);

  return (
    <ImageModelContext.Provider value={imageModel}>
      {children}
    </ImageModelContext.Provider>
  );
}
