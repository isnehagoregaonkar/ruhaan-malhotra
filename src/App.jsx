import { Route, BrowserRouter, Routes } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import SuccessPage from "./pages/Success/SuccessPage";
import NotFound from "./pages/NotFound/NotFound";
import Ruhaan from "./pages/About/Ruhaan";

function App() {
  return (
    <div className="bg-[#f1f5eb]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/ruhaan" element={<Ruhaan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
