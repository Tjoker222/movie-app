import { useMovies } from "../../hooks/useMovies";
import styles from "./styles.module.scss";

export interface CardProps {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  onClick: () => void;
}

export function Card({
  id,
  original_title,
  poster_path,
  vote_average,
  onClick,
}: CardProps) {
  const { handleNavigateToDetails } = useMovies();

  return (
    <div
      className={styles.container}
      onClick={() => handleNavigateToDetails({ id: id })}
    >
      <div className={styles.content}>
        <img
          className={styles.thumbnail}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
        />
        <div className={styles.rankingContainer}>
          <span className={styles.rating}>{vote_average}</span>
        </div>
      </div>
      <footer className={styles.title}>
        <strong>{original_title}</strong>
      </footer>
    </div>
  );
}
