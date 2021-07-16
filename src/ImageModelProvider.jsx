import { useEffect, useState, createContext, useContext } from "react";

import * as tf from "@tensorflow/tfjs";

const ImageModelContext = createContext();

export function useImageModel() {
  return useContext(ImageModelContext);
}

export default function ImageModelProvider({ children }) {
  const [imageModel, setImageModel] = useState(null);
  const [labels, setLabels] = useState(null);

  const model_url =
    "https://modelhosting.web.app/small_imagemodel_4/model.json"; // Change this url to yours
  const label_url =
    "https://modelhosting.web.app/small_imagemodel_4/labels.json"; // Change this url to yours

  useEffect(() => {
    // Load tensorflow model
    tf.loadGraphModel(model_url).then((loadedModel) => {
      setImageModel(loadedModel);
      tf.tidy(() => loadedModel.predict(tf.zeros([1, 224, 224, 3]))); // Warm up the model
    });

    // Load labels
    fetch(label_url)
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
