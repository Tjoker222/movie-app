import styles from "./styles.module.scss";
import MovieIcon from "../../../assets/Icon/movie-icon.svg";
import SuggestArrow from "../../../assets/Icon/arrow-right.svg";
import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <Link to= "/">
            <img src={MovieIcon} alt="movieIcon"></img>
          </Link>
          <div className={styles.options}>
            <h4>Movies</h4>
            <h4>TV Shows</h4>
            <div className={styles.suggest}>
              <h4>Suggest me</h4>
              <img src={SuggestArrow} alt="SuggestArrow"></img>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
