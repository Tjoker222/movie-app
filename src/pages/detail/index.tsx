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
      setData(showDetail)
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
          <div className={styles.initialTitle}>
            <h1>MaileHereko</h1>

            <h5>
              List of movies and TV Shows, I, Pramod Poudel have watched till
              date. Explore what I have watched and also feel free to make a
              suggestion. 😉
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
