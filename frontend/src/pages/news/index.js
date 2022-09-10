import React, { useEffect, useState } from "react";
import styles from "./News.module.scss";
import { TopicsCard, ArticlesCard } from "../../components/News";
import getNewsData from "../../components/News/SearchAPI/SearchAPI";

export default function News({ data }) {
  const [city, setCity] = useState("Miami");
  const [topics, setTopics] = useState([
    {
      id: 1,
      label: "Pandemic",
      selected: true,
    },
    {
      id: 2,
      label: "Extreme Weather",
      selected: false,
    },
    {
      id: 3,
      label: "Rising Temperatures",
      selected: false,
    },
    {
      id: 4,
      label: "Sea Level Rise",
      selected: false,
    },
    {
      id: 5,
      label: "Coastal Ecosystems",
      selected: false,
    },
    {
      id: 6,
      label: "Energy Consumption",
      selected: false,
    },
    {
      id: 7,
      label: "Sustainable Materials",
      selected: false,
    },
  ]);
  const [searchTypes, setSearchTypes] = useState([
    {
      id: 1,
      label: "News",
      selected: true,
    },
    {
      id: 2,
      label: "Scholarly Articles",
      selected: false,
    },
  ]);
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    setArticles(await getNewsData(topics));
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <TopicsCard
          city={city}
          topics={topics}
          setTopicsHook={setTopics}
          searchTypes={searchTypes}
          setSearchTypesHook={setSearchTypes}
          onChange={async () => {
            setArticles(await getNewsData(topics));
          }}
        />
        <ArticlesCard articles={articles} />{" "}
      </div>
      <div className={styles.underConstruction}>
        Under Construction
      </div>
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
