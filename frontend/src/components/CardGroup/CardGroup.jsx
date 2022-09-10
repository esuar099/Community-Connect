import { CCCard } from "../";
import styles from "./CardGroup.module.scss";
import Link from "next/link";

export const CardGroup = () => {
  return (
    <div className={styles.cards}>
      <Link href="/guides">
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>Guides</h2>
          <CCCard
            description="Latest material for faceshields"
            img="assets/Guides.jpeg"
          />
        </div>
      </Link>
      <Link href="/trends">
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>Trends</h2>
          <CCCard
            description="This is a featured story"
            img="assets/Trends.jpeg"
          />
        </div>
      </Link>
      <Link href="/news">
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>News</h2>
          <CCCard
            description="This is a featured news"
            img="assets/News.jpeg"
          />
        </div>
      </Link>
    </div>
  );
};
