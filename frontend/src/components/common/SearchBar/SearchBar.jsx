import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "reactstrap";
import Image from "next/image";
import styles from "./SearchBar.module.scss";

export function SearchBar({
  titleLine1,
  titleLine2,
  placeholder,
  onSubmit,
  imgSrc,
  alt,
}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <h2 className={styles.title}>
          {titleLine1} {titleLine2}
        </h2>
        <label className={styles.searchBoxContainer}>
          <form>
            <input
              className={styles.searchBox}
              type="text"
              placeholder={placeholder}
              onSubmit={onSubmit}
            />
            <Button
              className={`${styles.actionButton} ${styles.searchButton}`}
              onClick={onSubmit}
              type="submit"
            >
              <div className={styles.searchIcon}>
                <AiOutlineSearch />
              </div>
            </Button>
          </form>
        </label>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} width={400} height={350} alt={alt} />
      </div>
    </div>
  );
}
