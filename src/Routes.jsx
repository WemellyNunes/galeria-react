import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import PhotoDetail from './components/PhotoDetail';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/galeria-react-web2" element={<Albums />} />
      <Route path="/galeria-react-web2/album/:id" element={<AlbumDetails />} />
      <Route path="/galeria-react-web2/photos/:id" element={<PhotoDetail />} />
    </Routes>
  );
};

const Rotas = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

export default Rotas;
