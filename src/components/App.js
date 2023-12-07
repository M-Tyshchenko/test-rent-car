import Catalog from "pages/CatalogPage/Catalog";
import Favorites from "pages/FavoritePage/Favorites";
import Home from "pages/HomePage/Home";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
