import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='app-wrapper max-w-[1000px] h-auto'>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
