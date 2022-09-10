import { CardGroup, CardBody, Card, CardTitle, Label, React } from "reactstrap";
import { useState, useEffect, setList, useRef } from "react";
import styles from "./ArticlesCard.module.scss";

export function ArticlesCard({ articles }) {
  const createArticleDisplay = (article) => {
    return (
      <CardGroup className={styles.underline} key={article.id}>
        <a
          href={article.link || "#"}
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={styles.articleDisplay}>
            <Label className={styles.articleTitle}>{article.title}</Label>
            <br />
            <Label className={styles.articleDate}>{article.date}</Label>
          </div>
        </a>
      </CardGroup>
    );
  };

  const createArticleList = () => {
    if (!articles)
      return createArticleDisplay({
        id: 0,
        title: "Could not find any relevant sources.",
        date: "",
      });

    return articles.map((article) => createArticleDisplay(article));
  };

  return (
    <Card className={styles.cards}>
      <CardBody>
        <CardTitle className={styles.underlineTitle}>
          Latest on Your Topics of Interest
        </CardTitle>
        {createArticleList()}
      </CardBody>
    </Card>
  );
}
