import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

import styles from "./PaginateBtn.module.scss";

export const PaginateBtn = ({ count, setCount, length, children }) => {
  const paginateForward = () => {
    if (count + 5 < length) setCount(count + 5);
  };

  const paginatePrevious = () => {
    if (count > 0) setCount(count - 5);
  };

  return (
    <>
    <div className={styles.btnContainer}>
        <div className={styles.container}>
          <button onClick={paginatePrevious} className={styles.paginateBtn}>
            <MdOutlineArrowBackIos/>
          </button>
          Previous
        </div>
        <div className={styles.container}>
          Next
          <button onClick={paginateForward} className={styles.paginateBtn}>
            <MdOutlineArrowForwardIos/>
          </button>
        </div>
    </div>
      {children}
    </>
  );
};
