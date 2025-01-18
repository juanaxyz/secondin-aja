import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./home";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
// import Trend from "./pages/Trend";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Menampilkan halaman Home di path '/' */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/trend" element={<Trend />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
