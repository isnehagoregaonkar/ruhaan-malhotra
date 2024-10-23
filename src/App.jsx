import { Route, BrowserRouter, Routes } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="bg-[#f1f5eb]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
