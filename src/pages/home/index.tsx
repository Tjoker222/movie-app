import { SearchButton } from "../../components/SearchButton";
import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";

import styles from "./styles.module.scss";
import { CardMovie } from "../../types/movies";
import { types } from "util";
import { toast } from "react-toastify";
import { FilmFilter } from "../../components/FilmeFilter";
import { useFiltersContext } from "../../contexts/filter-context";
import { Filter } from "../../types/filter";
import { Card } from "../../components/Card";

export function HomePage() {
  const [data, setData] = useState<CardMovie[] | null>([]);
  const { getMovies, getSeries } = useMovies();
  const { CurrentFilter } = useFiltersContext();

  async function handleMovies(filter: Filter) {
    if (filter.name === "All") {
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

      const arrayMoviesAndSeries = [...movies, ...series];
      setData(arrayMoviesAndSeries);
    }

    if (filter.name === "Movies") {
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

    if (filter.name === "Tv Shows") {
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

  useEffect(() => {
    handleMovies(CurrentFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentFilter]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.initialTitle}>
            <h1>MaileHereko</h1>

            <h5>
              List of movies and TV Shows, I, Pramod Poudel have watched till
              date. Explore what I have watched and also feel free to make a
              suggestion. 😉
            </h5>

            <SearchButton />
          </div>

          <div className={styles.filmsContent}>
            <FilmFilter />

            <div className={styles.allText}>
              <h1>All</h1>
              <h5>({data?.length})</h5>
            </div>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {data != null && (
            <>
              {data?.map((res) => (
                <Card
                  id={res?.id}
                  original_title={res?.original_title}
                  poster_path={res?.poster_path}
                  vote_average={res?.vote_average}
                  onClick={() => console.log("Ok")}
                  key={res?.id}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
