import { useEffect, useState } from "react";
import { SearchGroup, TrendsCard } from "../../components/Trends";
import { PaginateBtn } from "../../components/common";
import styles from "./Trends.module.scss";
import { BasicForm, FoodForm, HomeForm, ShoppingForm, TravelForm } from "../../components/CarbonFootprintCalculator/CalculatorForm/Forms";

// temp
import trendsData from "../../example-data/TrendsData";

export default function Trends({ data }) {
  const [trends, setTrends] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTrends(trendsData);
  }, []);

  const trendsCards = trends.map((article, index) => {
    if (index >= count && index < count + 5) {
      const { id } = article;
      const data = { ...article };
      
      return (
      <TrendsCard data={data} key={id} />);
    }
    return <><BasicForm/></>;
  });

  return (
    <>
      <SearchGroup />
      <div className={styles.container}>
        <PaginateBtn
          count={count}
          setCount={setCount}
          length={trendsCards.length}
        >
          <div className={styles.cards}>{trendsCards}</div>
        </PaginateBtn>
      </div>
    </>
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
