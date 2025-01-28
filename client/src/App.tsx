import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
