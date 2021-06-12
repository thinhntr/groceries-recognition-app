import MainContainer from "./MainContainer";

function TextRecognizer() {
  return (
    <MainContainer className="flex justify-center items-center ">
      <div className="m-4 p-16 max-w-screen-md transform -rotate-6 rounded-xl bg-gradient-to-r from-cyan-400 to-light-blue-500">
        <div className="bg-white max-w-screen-sm transform rotate-12 rounded-xl p-8 text-center text-3xl font-extrabold">
          🗒 Coming Soon
        </div>
      </div>
    </MainContainer>
  );
}

export default TextRecognizer;
