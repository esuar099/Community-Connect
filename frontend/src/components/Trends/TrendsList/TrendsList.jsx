import { ListGroup, ListGroupItem } from "reactstrap";
import { Accordion } from "../..";
import styles from "./TrendsList.module.scss";
import {
  fourTopTrendingTopics,
  topicsGainingPopularity,
  trendMap,
} from "../../../example-data/TrendsData";

export const TrendsList = () => {
  const randomIndex =
    fourTopTrendingTopics.length >= 8
      ? Math.floor(Math.random() * (fourTopTrendingTopics.length - 4))
      : 0;

  const numberOfTrends =
    fourTopTrendingTopics.length >= 4 ? 4 : fourTopTrendingTopics.length;

  const displayFourTopTrends = fourTopTrendingTopics
    .slice(randomIndex, numberOfTrends)
    .map((trend) => {
      return (
        <ListGroupItem className={styles.listItem}>
          <Accordion title={trend.title} description={trend.description} />
        </ListGroupItem>
      );
    });

  const displayTopicsGainingPopularity = topicsGainingPopularity.map(
    (trend) => {
      return (
        <ListGroupItem className={styles.listItem}>
          <Accordion title={trend.title} description={trend.description} />
        </ListGroupItem>
      );
    }
  );

  return (
    <div>
      <div className={styles.section}>
        <ListGroup className={styles.listGroup}>
          <h2>Covid Vaccination sites near you</h2>
          <ListGroupItem className={styles.listItem}>
            <img src={trendMap} alt="trend map" />
          </ListGroupItem>
        </ListGroup>
      </div>
      <div className={styles.section}>
        <ListGroup className={styles.listGroup}>
          <h2>4 Trending topics in Florida</h2>
          {displayFourTopTrends}
        </ListGroup>
      </div>
      <div className={styles.section}>
        <ListGroup className={styles.listGroup}>
          <h2>4 Topics gaining popularity in Florida</h2>
          {displayTopicsGainingPopularity}
        </ListGroup>
      </div>
    </div>
  );
};
