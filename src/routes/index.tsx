import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { FiltersProvider } from "../contexts/filter-context";
import { DefaultLayout } from "../components/Layouts/DefaultLayout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </DefaultLayout>
      </FiltersProvider>
    </BrowserRouter>
  );
}
