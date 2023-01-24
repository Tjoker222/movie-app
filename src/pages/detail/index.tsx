import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../../types/movies";
import { types } from "util";
import { toast } from "react-toastify";

export function DetailPage() {
  const { id } = useParams();

  const { getMovieDetails } = useMovies();
  const [data, setData] = useState<MovieDetail | null>();

  async function handleShowDetails() {
    if (id) {
      let showDetail = await getMovieDetails(id);
      if (types.isNativeError(showDetail)) {
        console.error(showDetail);
        toast(showDetail.message, {
          type: "error",
        });
        return;
      }
      setData(showDetail);
      console.log(showDetail);
    }
  }

  useEffect(() => {
    handleShowDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.initialThumb}>
            <img
              className={styles.initialImage}
              alt={data?.original_title}
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            />
            <div className={styles.imageBackground} />
            <div className={styles.titleDescription}>
              <div className={styles.categories}>
                <p>MaileHereko</p>
                <p>/</p>
                <p>Tv shows</p>
              </div>
              <h1>{data?.original_title}</h1>
            </div>
          </div>
          <div className={styles.showDescription}>
            <img
              className={styles.descriptionImage}
              alt={data?.original_title}
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            />
            <div className={styles.showDetails}>
              <h2>{data?.tagline}</h2>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
