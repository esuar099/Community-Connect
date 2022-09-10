import React from "react";
// import { Card, CardText, CardBody } from "reactstrap";
import styles from "./NewsContent.module.scss";

export const NewsContent = ({ image, author, title, description }) => {
  // Get random number to dynamically get different cat placeholder image for news articles that are missing image URL
  const randomNumber = Math.floor(Math.random() * 400 + 300);
  return (
    <div>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={
            image
              ? image
              : `https://placekitten.com/${randomNumber}/${randomNumber}`
          }
          alt={description}
        />
        <div className={styles.paragraphs}>
          <p>{author}</p>
          <p className={styles.title}>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
