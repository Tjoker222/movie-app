import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { Navbar } from "../components/Navbar";
import { FiltersProvider } from "../contexts/filter-context";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </FiltersProvider>
    </BrowserRouter>
  );
}
