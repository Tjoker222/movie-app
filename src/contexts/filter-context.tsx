import { createContext, useContext } from "react";
import { Filter, FilterContextData } from "../types/filter";

export const FilterContext = createContext<FilterContextData>(
  {} as FilterContextData
);

interface filterProps {
  filterOption: string;
  optionActive: string;
  optionDeactivate: string;
}

export function TestContext({
  filterOption,
  optionActive,
  optionDeactivate,
}: filterProps) {
  const { CurrentFilter, setCurrentFilter, filters } = useFilterContext();

  function handleFilterChange(newFilter: Filter) {
    setCurrentFilter(newFilter);
  }

  return (
    <>
      {filters.map((filter) => (
        <div
          className={`${filterOption} ${
            filter.name === CurrentFilter.name ? optionActive : optionDeactivate
          }`}
          onClick={() => {
            handleFilterChange(filter);
          }}
        >
          <h5>{filter.name}</h5>
        </div>
      ))}
    </>
  );
}

export const useFilterContext = () => useContext(FilterContext);
