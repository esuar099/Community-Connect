import { Card, CardText, CardBody } from "reactstrap";
import styles from "./TrendsCard.module.scss";

export const TrendsCard = ({ data, actions }) => {
  const { description, id, image: img, title, url } = data;

  return (
    <a className={styles.container} href={url}>
      <Card className={styles.trendsCard}>
        <CardBody>
          <div className={styles.trendsTitle}>
            <CardText className={styles.trendsHeading}>
              Featured Story:
            </CardText>
            <CardText className={styles.trendsTitleName}>{title}</CardText>
          </div>
          <div className={styles.trendsLink}>
            <img
              className={styles.trendsImage}
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
