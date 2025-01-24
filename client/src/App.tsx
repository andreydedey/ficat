import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <BrowserRouter>
      <div className="w-1/2 mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
