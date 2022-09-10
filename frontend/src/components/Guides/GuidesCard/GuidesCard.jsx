import { Card, CardText, CardBody } from "reactstrap";
import styles from "./GuidesCard.module.scss";

export const GuidesCard = ({ data, actions }) => {
  const { description, id, image: img, title, url } = data;

  return (
      <a className={styles.container} href={url}>
        <Card className={styles.guidesCard}>
          <CardBody>
            <div className={styles.guidesTitle}>
              <CardText className={styles.guidesHeading}>Guide on:</CardText>
              <CardText className={styles.guidesTitleName}>{title}</CardText>
            </div>
            <div className={styles.guidesLink}>
              <img className={styles.guidesImage} src={img} alt={description} href={url}/>
            </div>
          </CardBody>
        </Card>
      </a>
  );
};
