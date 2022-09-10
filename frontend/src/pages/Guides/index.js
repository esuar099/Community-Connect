import { useEffect, useState } from "react";
import { SearchGroup, GuidesCard } from "../../components/Guides";
import { PaginateBtn } from "../../components/common";
import styles from "./Guides.module.scss";

// temp
import guidesData from "../../example-data/GuidesData";

export default function Guides({ data }) {
  const [guides, setGuides] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setGuides(guidesData);
  }, []);

  const guidesCards = guides.map((guide, index) => {
    if (index >= count && index < count + 5) {
      const { id } = guide;
      const data = { ...guide };
      return <GuidesCard data={data} key={id} />;
    }
    return <></>;
  });

  return (
    <>
      <SearchGroup />
      <div className={styles.container}>
        <PaginateBtn
          count={count}
          setCount={setCount}
          length={guidesCards.length}
        >
          <div className={styles.cards}>{guidesCards}</div>
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
