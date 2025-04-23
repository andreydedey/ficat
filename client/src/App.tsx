import { BrowserRouter, Route, Routes } from "react-router";
import backgroundImage from "./assets/image/ficat_background.jpg";
import logoHeader from "./assets/image/header.png";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About";

export function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-dvh flex justify-center bg-[auto_100px] mb-3"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-2xl">
          <img className="h-36" src={logoHeader} alt="logo Header" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
