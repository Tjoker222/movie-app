import { useMovies } from "../../hooks/useMovies";
import Star from "../../assets/Icon/star.svg";
import styles from "./styles.module.scss";

export interface CardProps {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  typeShow: 'movie' | 'series';
}

export function Card({
  id,
  original_title,
  poster_path,
  vote_average,
  typeShow
}: CardProps) {
  const { handleNavigateToDetails } = useMovies();

  return (
    <div
      className={styles.container}
      onClick={() => handleNavigateToDetails({ id: id, type:typeShow })}
    >
      <div className={styles.content}>
        <img
          className={styles.thumbnail}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
        />
        <div className={styles.rankingContainer}>
          <img
            src={Star}
            alt='star_rating'
          />
          <span className={styles.rating}>{vote_average}</span>
        </div>
      </div>
      <footer className={styles.title}>
        <strong>{original_title}</strong>
      </footer>
    </div>
  );
}
