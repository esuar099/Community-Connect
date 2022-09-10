import React from "react";
import styles from "./NewsSection.module.scss";
import { NewsContent } from "../..";
// import newsArr from "../../../api/NewsData/news";

export const NewsSection = ({ news }) => {
  const displayNews = news?.map(({ provider, description, image, name }) => {
    return (
      <NewsContent
        image={image?.thumbnail.contentUrl}
        author={provider[0].name}
        title={name}
        description={description}
      />
    );
  });

  return (
    <div>
      <div className={styles.news}>
        <h3 className={styles.bigHeader}>
          <b> news articles </b> about "Coronavirus"
        </h3>
        {displayNews}
      </div>
    </div>
  );
};
