import styles from './styles.module.scss';
import { useState } from 'react';
import { FilterContext, TestContext } from '../../contexts/filter-context';
import { Filter } from '../../types/filter';



export function FilmeFilter() {

  const filters: Filter[] = [
    {name: "All"},
    {name: "Movies"},
    {name: "Tv Shows"}
  ]
  
  const [CurrentFilter, setCurrentFilter] = useState<Filter>(filters[0]);


  return (
    <>
      <div className={styles.FilmsFilter}>

        <FilterContext.Provider value={{filters, CurrentFilter, setCurrentFilter}}>
          <TestContext 
            filterOption={styles.filterOption} 
            optionActive={styles.optionActive}
            optionDeactive={styles.optionDeactive}
          />
        </FilterContext.Provider>

      </div>
    </>
  );
}