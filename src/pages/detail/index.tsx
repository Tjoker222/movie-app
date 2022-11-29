import styles from "./styles.module.scss";
import { useSearchParams, useLocation } from "react-router-dom";

export function DetailPage() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log(id);

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
