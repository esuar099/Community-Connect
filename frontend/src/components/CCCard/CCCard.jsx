import React from "react";
import { Card, CardText, CardBody } from "reactstrap";
import styles from "./CCCard.module.scss";

export const CCCard = ({ description, img }) => {
  return (
    <Card className={styles.card}>
      <CardBody>
        <CardText className={styles.cardDescription}>{description}</CardText>
      </CardBody>
      <img className={styles.cardImage} src={img} alt={description} />
    </Card>
  );
};
