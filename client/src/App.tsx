import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center bg-violet-800">
        <div className="max-w-screen-xl bg-slate-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
