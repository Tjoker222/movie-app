import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../../types/movies";
import { types } from "util";
import { toast } from "react-toastify";
import Star from "../../assets/Icon/star.svg";

export function DetailPage() {
  const { id, type } = useParams();

  const { getMovieDetails, getSeriesDetails } = useMovies();
  const [data, setData] = useState<MovieDetail | null>();

  async function handleShowDetails() {
    if (id) {
      if (type === "movie") {
        let showDetail = await getMovieDetails(id);
        if (types.isNativeError(showDetail)) {
          console.error(showDetail);
          toast(showDetail.message, {
            type: "error",
          });
          return;
        }
        setData(showDetail);
      } else {
        let showDetail = await getSeriesDetails(id);
        if (types.isNativeError(showDetail)) {
          console.error(showDetail);
          toast(showDetail.message, {
            type: "error",
          });
          return;
        }
        setData(showDetail);
      }
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
              alt={data?.title ? data?.title : data?.name}
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            />
            <div className={styles.imageBackground} />
            <div className={styles.titleDescription}>
              <div className={styles.categories}>
                <p>MaileHereko</p>
                <p>/</p>
                <p>Tv shows</p>
              </div>
              <h1>{data?.title ? data?.title : data?.name}</h1>
            </div>
          </div>
          <div className={styles.showDescription}>
            <img
              className={styles.descriptionImage}
              alt={data?.title ? data?.title : data?.name}
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            />
            <div className={styles.showDetails}>
              <h2>{data?.tagline}</h2>
              <p>{data?.overview}</p>
              <div className={styles.rankingContainer}>
                <img src={Star} alt="star_rating" />
                <span className={styles.rating}>{data?.vote_average}</span>
              </div>
              <div className={styles.columnDetail}>
                <div className={styles.rowDetail}>
                  <div className={styles.rowContent}>
                    <span>Type</span>
                    {data?.number_of_seasons ? <p>TV show</p> : <p>Movie</p>}
                  </div>
                  <div className={styles.rowContent}>
                    <span>Status</span>
                    <p>{data?.status}</p>
                  </div>
                </div>
                {data?.number_of_seasons ? (
                  <>
                    <div className={styles.rowDetail}>
                      <div className={styles.rowContent}>
                        <span>First air date</span>
                        <p>{data?.first_air_date}</p>
                      </div>
                      <div className={styles.rowContent}>
                        <span>Last air date</span>
                        <p>{data?.last_air_date}</p>
                      </div>
                    </div>
                    <div className={styles.rowDetail}>
                      <div className={styles.rowContent}>
                        <span>No.of Seasons</span>
                        <p>{data?.number_of_seasons}</p>
                      </div>
                      <div className={styles.rowContent}>
                        <span>No. of episodes</span>
                        <p>{data?.number_of_episodes}</p>
                      </div>
                    </div>
                    {data?.episode_run_time[0] && (
                      <div className={styles.rowContent}>
                        <span>Episode run time</span>
                        <p>{data?.episode_run_time} min</p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className={styles.rowContent}>
                      <span>Release date</span>
                      <p>{data?.release_date}</p>
                    </div>
                    <div className={styles.rowContent}>
                      <span>Run time</span>
                      <p>{data?.runtime} min</p>
                    </div>
                  </>
                )}

                <div className={styles.rowContent}>
                  <span>Genres</span>
                  <div className={styles.genres}>
                    {data?.genres.map((genre) => (
                      <p>{genre.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
