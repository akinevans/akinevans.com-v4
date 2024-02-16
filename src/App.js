import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='outer-app-wrapper flex justify-center items-center w-[100vw] h-[100vh] bg-primary'>
      <div className='app-wrapper flex flex-row-reverse justify-between items-center gap-20 max-w-[1000px] h-auto m-auto '>
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
