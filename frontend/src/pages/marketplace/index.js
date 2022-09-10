import { useEffect, useState } from "react";
import { SearchGroup, GuidesCard } from "../../components/Guides";
import { PaginateBtn } from "../../components/common";
import Image from "next/image";
import styles from "./Marketplace.module.scss";
import {
    CardBody,
    CardTitle,
    CardText,
    Card,
} from "reactstrap";
// temp
import guidesData from "../../example-data/GuidesData";

export default function Marketplace({ data }) {
  return (
    <Card className={styles.cards}>
      <div clasName={styles.container}>
        <img
          src="/assets/Community-Connect_MarketplaceApp_Page_2.png"
          width="710"
          height="392"
          objectFit="cover"
        />
      <CardTitle className= {styles.title}>
          Software Architecture of the AI-Driven Marketplace App
      </CardTitle>
      </div>
      
      <div clasName={styles.container}>
        <iframe
          width="700" 
          height="385" 
          src="https://www.youtube.com/embed/SepzhWf7jAk" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <CardTitle className= {styles.title}>
          Community-Connect Marketplace App Demo
      </CardTitle>
      </div>
      
    </Card>
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
