import Overview from "./components/Overview";
import ImageRecognizer from "./components/ImageRecognizer";
import VideoRecognizer from "./components/VideoRecognizer";
import TextRecognizer from "./components/TextRecognizer";

const routes = [
  [
    "Image",
    "/image",
    <ImageRecognizer />,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-camera-fill nav-link-svg"
      viewBox="0 0 16 16"
    >
      <path
        className="icon-color-secondary"
        d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
      />
      <path
        className="icon-color-primary"
        d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
      />
    </svg>,
  ],
  [
    "Video",
    "/video",
    <VideoRecognizer />,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-camera-reels-fill nav-link-svg"
      viewBox="0 0 16 16"
    >
      <path
        className="icon-color-secondary"
        d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
      <path
        className="icon-color-secondary"
        d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
      <path
        className="icon-color-primary"
        d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"
      />
    </svg>,
  ],
  [
    "Text",
    "/text",
    <TextRecognizer />,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-card-heading nav-link-svg"
      viewBox="0 0 16 16"
    >
      <path
        className="icon-color-secondary"
        d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
      />
      <path
        className="icon-color-primary"
        d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"
      />
    </svg>,
  ],
  [
    "Home",
    "/",
    <Overview />,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-house-fill nav-link-svg"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        className="icon-color-primary"
        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
      />
      <path
        fillRule="evenodd"
        className="icon-color-secondary"
        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
      />
    </svg>,
  ],
];

export default routes;
