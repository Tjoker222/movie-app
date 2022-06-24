import styles from './styles.module.scss';
import { useState } from 'react';


export function FilmeFilter() {
  
  const [active, setActive] = useState<number>(1);


  return (
    <>
      <div className={styles.FilmsFilter}>

        <div className={`${styles.filterOption} 
        ${active===1?styles.optionActive:
        styles.optionDeactive}`} onClick={()=>{setActive(1)}}>
          <h5>All</h5>
        </div>
        <div className={`${styles.filterOption} 
        ${active===2?styles.optionActive:
        styles.optionDeactive}`} onClick={()=>{setActive(2)}}>
          <h5>Movies</h5>
        </div>
        <div className={`${styles.filterOption} 
        ${active===3?styles.optionActive:
        styles.optionDeactive}`} onClick={()=>{setActive(3)}}>
          <h5>TV Shows</h5>
        </div>

      </div>
    </>
  );
}