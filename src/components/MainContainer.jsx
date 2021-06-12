export default function MainContainer({ className, children }) {
  return (
    <div className={`m-0 p-4 sm:ml-20 min-h-screen ${className}`}>
      {children}
    </div>
  );
}
