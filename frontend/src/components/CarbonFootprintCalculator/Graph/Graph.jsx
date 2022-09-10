import styles from "./Graph.module.scss";
//import {} from 'react-chartjs-2';

export function Graph(props) {
  const val = props.value;
  console.log(val);
  return <div className={styles.mainContainer}>{val}</div>;
}
