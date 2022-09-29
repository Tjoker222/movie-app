import styles from "./styles.module.scss";
import SearchIcon from "../../assets/Icon/search-normal.svg";

export function SearchButton() {
  return (
    <>
      <form className={styles.container}>
        <img src={SearchIcon} alt="searchIcon"></img>
        <input type="text" placeholder="Search Movies or TV Shows"></input>
      </form>
    </>
  );
}
