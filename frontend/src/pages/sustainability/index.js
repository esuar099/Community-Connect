import React, { useEffect, useState } from "react";
import { SearchGroup, TrendsCard } from "../../components/Trends";
import { PaginateBtn } from "../../components/common";
import styles from "./Sustainability.module.scss";
import { TopicsCard, ArticlesCard } from "../../components/Sustainability/";
import axios from "axios";

// temp
import trendsData from "../../example-data/TrendsData";
import { Card, CardBody, CardText, CardTitle, Form, FormGroup, Label } from "reactstrap";

export default function Sustainability({ data }) {
  const [topics, setTopics] = useState([
    {
      id: 1,
      label: "Pandemic",
      selected: false
    },
    {
      id: 2,
      label: "Climate Change",
      selected: false
    },
    {
      id: 3,
      label: "Greenhouse Gases",
      selected: true
    },
    {
      id: 4,
      label: "Extreme Events and Environment",
      selected: true
    },
    {
      id: 5,
      label: "Energy and Environment",
      selected: false
    },
    {
      id: 6,
      label: "Sustainability of the Environment",
      selected: false
    },
    {
      id: 7,
      label: "All Topics",
      selected: false
    },
  ]);
  const [city, setCity] = useState("Miami");

  return (
    <div className={styles.container}>
      <TopicsCard city={city} topics={topics} setTopicsHook={setTopics}/>
      <ArticlesCard/>
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