import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Components/About";
import Home from "./Pages/Components/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
