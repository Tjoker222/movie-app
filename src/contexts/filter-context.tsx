import { createContext, ReactNode, useContext, useState } from "react";
import { FilterContextData, Filter } from "../types/filter";

const FiltersContext = createContext<FilterContextData>(
  {} as FilterContextData
);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters] = useState<Filter[]>([
    { name: "All" },
    { name: "Movies" },
    { name: "Tv Shows" },
  ]);

  const [CurrentFilter, setCurrentFilter] = useState<Filter>(filters[0]);

  return (
    <FiltersContext.Provider
      value={{ filters, CurrentFilter, setCurrentFilter }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => useContext(FiltersContext);
