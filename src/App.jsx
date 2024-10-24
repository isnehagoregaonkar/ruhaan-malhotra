import { Route, BrowserRouter, Routes } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import GalleryPage from "./pages/Gallery/GalleryPage";

function App() {
  return (
    <div className="bg-[#f1f5eb]">
      <BrowserRouter>
        <Routes>
          <Route path="/ruhaan-malhotra/" element={<Home />} />
          <Route path="/ruhaan-malhotra/about" element={<AboutPage />} />
          <Route path="/ruhaan-malhotra/products" element={<ProductPage />} />
          <Route path="/ruhaan-malhotra/gallery" element={<GalleryPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
