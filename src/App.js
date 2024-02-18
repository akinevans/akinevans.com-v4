import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
