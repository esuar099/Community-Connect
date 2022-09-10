import React from "react";
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
        <button onClick={paginatePrevious} className={styles.paginateBtn}>{'<'}</button>
      </div>
      {children}
      <div className={styles.btnContainer}>
        <button onClick={paginateForward} className={styles.paginateBtn}>{'>'}</button>
      </div>
    </>
  );
};
