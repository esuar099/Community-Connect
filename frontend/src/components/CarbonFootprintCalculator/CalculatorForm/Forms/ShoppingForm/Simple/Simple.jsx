import { Slider } from "../../../Slider";
import styles from "./Simple.module.scss";

export function Simple({ goods, setGoods, services, setServices }) {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider
          value={goods}
          title={"Goods"}
          setValue={setGoods}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>{goods} / month</span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={services}
          title={"Services"}
          setValue={setServices}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>{services} / month</span>
        </Slider>
      </div>
    </>
  );
}
