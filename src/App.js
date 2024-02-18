import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='outer-app-wrapper flex justify-center items-center w-[100vw] h-[100vh] bg-primary'>
      <div className='app-wrapper flex flex-row-reverse justify-between items-center gap-20 max-w-[1000px] h-auto m-auto '>
        <Navbar />
        <About />
      </div>
    </div>
  );
}

export default App;
