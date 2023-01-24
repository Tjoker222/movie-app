import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { DetailPage } from "../pages/detail";
import { FiltersProvider } from "../contexts/filter-context";
import { DefaultLayout } from "../components/Layouts/DefaultLayout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:type/:id" element={<DetailPage/>} />
          </Routes>
        </DefaultLayout>
      </FiltersProvider>
    </BrowserRouter>
  );
}
