import { useEffect, useState, createContext, useContext } from "react";

import * as tf from "@tensorflow/tfjs";

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
    tf.loadGraphModel(url + version + "/model.json").then((loadedModel) => {
      setImageModel(loadedModel);
      tf.tidy(() => loadedModel.predict(tf.zeros([1, 224, 224, 3]))); // Warm up the model
    });

    fetch(url + version + "/labels.json")
      .then((response) => response.json())
      .then((data) => {
        setLabels(data);
      });
  }, []);

  return (
    <ImageModelContext.Provider value={[imageModel, labels]}>
      {children}
    </ImageModelContext.Provider>
  );
}
