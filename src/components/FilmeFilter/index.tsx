import { useFiltersContext } from '../../contexts/filter-context';
import { Filter } from '../../types/filter';
import styles from './styles.module.scss';

export function FilmFilter() {
  const { CurrentFilter, setCurrentFilter, filters } = useFiltersContext();

  function handleFilterChange(newFilter: Filter) {
    setCurrentFilter(newFilter);
  }

  return (
    <div className={styles.filmsFilter}>
      {filters.map((filter) => (
        <button
          key={filter.name}
          className={`${styles.filterOption} ${
            filter.name === CurrentFilter.name
              ? styles.optionActive
              : styles.optionDeactivate
          }`}
          onClick={() => {
            handleFilterChange(filter);
          }}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}
