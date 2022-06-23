import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/home';
import { Navbar } from '../components/Navbar';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
