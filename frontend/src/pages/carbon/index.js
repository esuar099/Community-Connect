import { Interface } from "../../components/CarbonFootprintCalculator";
import styles from "./CarbonFootprint.module.scss";

export default function CarbonFootprint({ data }) {
  return (
    <div className={styles.container}>
      <Interface  />
    </div>
  );
}

// used for SSR data fetching
export async function getServerSideProps(context) {
  // const res = await fetch('api endpoint here');
  // const data = await res.json();

  const data = ""; // temp until full implementation of data fetching
  return {
    props: { data }, // will be passed to the page component as props
  };
}
