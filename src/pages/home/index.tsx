import { SearchButton } from '../../components/SearchButton';
import { useEffect, useState } from 'react';
import { useMovies } from '../../hooks/useMovies';

import styles from './styles.module.scss';
import { CardMovie } from '../../types/movies';
import { types } from 'util';
import { toast } from "react-toastify";



export function HomePage() {
  
  const [active, setActive] = useState<number>(1);
  const [data, setData] = useState<CardMovie[] | null>([]);

  function changeFilterButton(filter: number){
    setActive(filter);
    handleMovies(filter);
  }

  const {getMovies, getSeries} = useMovies();

  async function handleMovies(filter: number){

    if(filter===1){

      const movies = await getMovies();
      if (types.isNativeError(movies)) {
        console.error(movies);
        toast(movies.message, {
          type: "error",
        });
        return;
      }
    
      const series = await getSeries();
      if (types.isNativeError(series)) {
        console.error(series);
        toast(series.message, {
          type: "error",
        });
        return;
      }

      const arrayMoviesAndSeries = [...movies, ...series]
      setData(arrayMoviesAndSeries)
    }

    if(filter===2){
      const movies = await getMovies();
      if (types.isNativeError(movies)) {
        console.error(movies);
        toast(movies.message, {
          type: "error",
        });
        return;
      }

      const ArrayMovies = movies;
      setData(ArrayMovies);
    }

    if(filter===3){
      const series = await getSeries();
      if (types.isNativeError(series)) {
        console.error(series);
        toast(series.message, {
          type: "error",
        });
        return;
      }

      const ArraySeries = series;
      setData(ArraySeries);
    }


    
  }

  useEffect(()=>{

    handleMovies(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  


  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.initialTitle}>

            <h1>MaileHereko</h1>

            <h5>
              List of movies and TV Shows, I, Pramod Poudel have watched till date. 
              Explore what I have watched and also feel free to make a suggestion. 😉
            </h5>

            <SearchButton></SearchButton>

          </div>

          <div className={styles.filmsContent}>

            <div className={styles.FilmsFilter}>

              <div className={`${styles.filterOption} 
              ${active===1?styles.optionActive:
              styles.optionDeactive}`} onClick={()=>{changeFilterButton(1)}}>
                <h5>All</h5>
              </div>
              <div className={`${styles.filterOption} 
              ${active===2?styles.optionActive:
              styles.optionDeactive}`} onClick={()=>{changeFilterButton(2)}}>
                <h5>Movies</h5>
              </div>
              <div className={`${styles.filterOption} 
              ${active===3?styles.optionActive:
              styles.optionDeactive}`} onClick={()=>{changeFilterButton(3)}}>
                <h5>TV Shows</h5>
              </div>

            </div>

            <div className={styles.allText}>
              <h1>All</h1>
              <h5>(120)</h5>
            </div>


          </div>

        </div>
      </div>
    </>
  );
}
