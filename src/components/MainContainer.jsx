export default function MainContainer({ children }) {
  return (
    <div className="flex flex-col items-center justify-start sm:justify-center overflow-hidden min-h-screen sm:ml-20 pt-14 sm:pt-0">
      {children}
    </div>
  );
}
