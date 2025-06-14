import { BrowserRouter, Route, Routes } from "react-router-dom";
import backgroundImage from "./assets/image/ficat_background.jpg";
import logoHeader from "./assets/image/header.png";
import { About } from "./components/About";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { TalktoUs } from "./components/TalktoUs";

export function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-dvh flex justify-center bg-[auto_100px] mb-3"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-3xl">
          <img className="h-36" src={logoHeader} alt="logo Header" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/talk_to_us" element={<TalktoUs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
