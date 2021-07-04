import MainContainer from "./MainContainer";
import { useImageModel } from "../ImageModelProvider";

import { useState } from "react";
import MagicDropZone from "react-magic-dropzone";

import * as tf from "@tensorflow/tfjs";

const labels = [
  "ba\u0301nh ga\u0323o An",
  "ba\u0301nh oreo original",
  "ba\u0301nh que\u0302\u0301 kem vi\u0323 cam cosy",
  "bi\u0300nh nu\u031bo\u031b\u0301c khoa\u0301ng bidrico",
  "bi\u0300nh nu\u031bo\u031b\u0301c khoa\u0301ng tachiwa",
  "bi\u0300nh nu\u031bo\u031b\u0301c khoa\u0301ng vi\u0303nh ha\u0309o",
  "bo\u0323\u0302t canh vifon",
  "bo\u0323\u0302t ca\u0300 ri",
  "bo\u0323\u0302t ngu\u0303 vi\u0323 hu\u031bo\u031bng",
  "bu\u0300i nhu\u0300i the\u0301p",
  "bu\u0301t bi xanh",
  "cafe su\u031b\u0303a \u0111a\u0301 (cafe pho\u0302\u0301 - MacCoffee)",
  "cafe su\u031b\u0303a \u0111a\u0301 (nescafe 3 in 1)",
  "cafe \u0111en \u0111a\u0301 nescafe",
  "chai nu\u031bo\u031b\u0301c khoa\u0301ng aquafina 5 li\u0301t",
  "cha\u0301o go\u0301i thi\u0323t ba\u0306\u0300m ga\u0302\u0301u \u0111o\u0309",
  "cha\u0301o to\u0302\u0309 ye\u0302\u0301n thi\u0323t ba\u0306\u0300m",
  "co\u031bm cha\u0301y cha\u0300 bo\u0302ng",
  "hu\u0309 tie\u0302\u0301u nam vang cung \u0111i\u0300nh",
  "keo 502",
  "keo hai ma\u0323\u0306t",
  "ke\u0323o 4 mu\u0300a",
  "ke\u0323o DoubleMint",
  "ke\u0323o mentos golia",
  "ke\u0323o mu\u0301t con ga\u0302\u0301u",
  "ke\u0323o mu\u0301t su\u031b\u0303a milkita",
  "ke\u0323o singum lql hi\u0300nh xa\u0306m",
  "kha\u0302\u0309u trang y te\u0302\u0301",
  "ma\u0306\u0301m ruo\u0302\u0301c tri\u0301 ha\u0309i",
  "mie\u0302\u0301n vi\u0323 su\u031bo\u031b\u0300n heo phu\u0301 hu\u031bo\u031bng (go\u0301i a\u0306n lie\u0302\u0300n)",
  "mirinda soda kem",
  "mi\u0300 chay vi\u0323 na\u0302\u0301m miliket",
  "mi\u0300 gia\u0302\u0301y (mi\u0300 to\u0302m)",
  "mi\u0300 go\u0301i ga\u0302\u0301u \u0111o\u0309",
  "mi\u0300 go\u0301i la\u0302\u0309u na\u0302\u0301m chua cay reeva",
  "mi\u0300 go\u0301i la\u0302\u0309u tha\u0301i to\u0302m acecook",
  "mi\u0300 go\u0301i to\u0302m chua cay 3 mie\u0302\u0300n",
  "mi\u0300 go\u0301i to\u0302m chua cay ha\u0309o ha\u0309o",
  "mi\u0300 go\u0301i to\u0302m chua cay kokomi",
  "mi\u0300 go\u0301i tro\u0323\u0302n xo\u0302\u0301t ca\u0300 chua spaghetti kool",
  "mi\u0300 ly la\u0302\u0309u tha\u0301i to\u0302m modern",
  "mi\u0300 ly to\u0302m chua cay ha\u0309o ha\u0309o",
  "mi\u0300 ly tro\u0323\u0302n bbq cung \u0111i\u0300nh kool",
  "mi\u0300 ly tro\u0323\u0302n xo\u0302\u0301t ca\u0300 chua spaghetti kool",
  "muo\u0302\u0301i tie\u0302u co\u0302 u\u0301t",
  "nu\u031bo\u031b\u0301c ma\u0306\u0301m hu\u031bng thi\u0323nh 35 \u0111o\u0323\u0302 620ml",
  "nu\u031bo\u031b\u0301c ma\u0306\u0301m hu\u031bng thi\u0323nh 40 \u0111o\u0323\u0302 750ml",
  "nu\u031bo\u031b\u0301c ngo\u0323t 7Up hu\u031bo\u031bng chanh",
  "nu\u031bo\u031b\u0301c suo\u0302\u0301i aquafina",
  "o\u0302\u0301ng hu\u0301t",
  "pho\u031b\u0309 bo\u0300 go\u0301i  vifon",
  "pin trung super",
  "pin \u0111a\u0323i vuo\u0302ng golite",
  "su\u031b\u0303a \u0111a\u0323\u0306c ngo\u0302i sao phu\u031bo\u031bng nam",
  "su\u031b\u0303a \u0111a\u0323\u0306c o\u0302ng tho\u0323",
  "ta\u0306m bo\u0302ng ngoa\u0301y tai",
  "to\u0309i",
  "tru\u031b\u0301ng ga\u0300",
  "tu\u0301i \u0111u\u031b\u0323ng ra\u0301c tu\u031b\u0323 pha\u0302n hu\u0309y \u0111e\u0323\u0302 nha\u0302\u0301t",
  "tu\u031bo\u031bng ho\u0323\u0302t \u0111a\u0323\u0302u na\u0300nh hu\u031b\u0303u a\u0301i",
  "tu\u031bo\u031bng o\u031b\u0301t cholimex",
  "\u0111u\u031bo\u031b\u0300ng phe\u0300n",
];

function ImageRecognizer() {
  const imageModel = useImageModel();
  const [preview, setPreview] = useState("");
  const [predictions, setPredictions] = useState();

  function onDrop(accepted, rejected, links) {
    setPreview(accepted[0].preview || links[0]);
  }

  async function onImageChange(e) {
    const pixels = tf.browser.fromPixels(e.target);
    const batch = pixels.expandDims();
    const resized = tf.image.resizeBilinear(batch, [224, 224]);
    const predict = imageModel.predict(resized);
    const indexTensor = predict.argMax(-1);
    const index = indexTensor.arraySync()[0];
    const result = labels[index];
    setPredictions(result);
    console.log(result);
    pixels.dispose();
    batch.dispose();
    resized.dispose();
    predict.dispose();
    indexTensor.dispose();
    console.log("onImageChange", tf.memory());
  }

  return (
    <MainContainer className=" flex-center flex-col">
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
          <div className="bg-white rounded-b-xl shadow-xl w-96 max-w-85-screen p-4">
            {predictions}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default ImageRecognizer;
