import { Card, CardText, CardBody } from "reactstrap";
import styles from "./NewsCard.module.scss";

export const NewsCard = ({ data, actions }) => {
  const { description, id, image: img, title, url } = data;

  return (
    <a className={styles.container} href={url}>
      <Card className={styles.newsCard}>
        <CardBody>
          <div className={styles.newsTitle}>
            <CardText className={styles.newsHeading}>Article:</CardText>
            <CardText className={styles.newsTitleName}>{title}</CardText>
          </div>
          <div className={styles.newsLink}>
            <img
              className={styles.newsImage}
              src={img}
              alt={description}
              href={url}
            />
          </div>
        </CardBody>
      </Card>
    </a>
  );
};
