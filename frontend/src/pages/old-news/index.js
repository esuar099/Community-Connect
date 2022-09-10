import { useEffect, useState } from "react";
import { SearchGroup, NewsCard } from "../../components/old-news";
import { PaginateBtn } from "../../components/common";
import styles from "./News.module.scss";

// temp
import newsData from "../../example-data/NewsData";

export default function News({ data }) {
  const [news, setNews] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setNews(newsData);
  }, []);

  const newsCards = news.map((article, index) => {
    if (index >= count && index < count + 5) {
      const { id } = article;
      const data = { ...article };
      return <NewsCard data={data} key={id} />;
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
          length={newsCards.length}
        >
          <div className={styles.cards}>{newsCards}</div>
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
