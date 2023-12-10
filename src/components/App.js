import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { Home } from 'pages/HomePage/Home';
// import { Catalog } from 'pages/CatalogPage/Catalog';
// import { Favorites } from 'pages/FavoritePage/Favorites';

const HomePage = lazy(() => import('pages/HomePage/Home'));
const CatalogPage = lazy(() => import('pages/CatalogPage/Catalog'));
const FavoritesPage = lazy(() => import('pages/FavoritePage/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
