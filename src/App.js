import "./App.css";
import About from "./components/About/About";
// import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<About />} />
    </Routes>
  );
}

export default App;

{
  /* <div className='outer-app-wrapper flex justify-center items-center w-[100vw] h-[100vh] bg-primary'>
<div className='app-wrapper flex flex-row-reverse justify-between items-center gap-20 max-w-[1000px] h-auto m-auto '></div>
</div> */
}
