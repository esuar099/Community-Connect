import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./HomeCard.module.scss";

export function HomeCard() {
  const [isLoggedIn, setLogin] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h6 className={styles.heading}>A Platform for Resilient + Sustainable Communities</h6>

        <div className={styles.buttonSection}>
            <Link href="/login"><button className={styles.mainButton} role="button">LOG IN</button></Link>
            <Link href="/register"><button className={styles.mainButton} role="button">Register</button></Link>
        </div>

        <h6 className={styles.heading}>Exchange Information with Your Community</h6>

        <div className={styles.infoSection}>
          <div className={styles.infoObject}>
            <img
              src="/assets/CC Your Community Icon.png"
              className={styles.infoIcon}
            />
            <h6 className={styles.infoLabel}>Local Community</h6>
            <h6 style={{width:"140px"}} className={styles.infoDescription}>Visit the Forums page to learn about and discuss local issues</h6>
          </div>

          <div className={styles.infoObject}>
            <img
              src="/assets/CC Health Icon.png"
              className={styles.infoIcon}
            />
            <h6 className={styles.infoLabel}>Pandemic</h6>
            <h6 className={styles.infoDescription}>Visit the Forums and News pages for pandemic and other emergency news</h6>
          </div>

          <div className={styles.infoObject}>
            <img
              src="/assets/CC Green Product Icons.png"
              className={styles.infoIcon}
            />
            <h6 className={styles.infoLabel}>Green Products</h6>
            <h6 className={styles.infoDescription}>Visit the Marketplace and News pages to find out about green solutions</h6>
          </div>
        </div>
      </div>
      <img src="assets/CC Home Page Icon.png" className={styles.phoneImage}/>
    </div>
  );
}