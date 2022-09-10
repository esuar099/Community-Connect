import { Slider } from "../../../Slider";
import styles from "./Simple.module.scss";

export function Simple({
  meatFishEggs,
  setMeatFishEggs,
  bakedGoods,
  setBakedGoods,
  dairy,
  setDairy,
  fruitsVeggies,
  setFruitsVeggies,
  snacks,
  setSnacks,
}) {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider
          value={meatFishEggs}
          title={"Meat, fish, eggs"}
          setValue={setMeatFishEggs}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {meatFishEggs} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={bakedGoods}
          title={"Grains & baked goods"}
          setValue={setBakedGoods}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {bakedGoods} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={dairy}
          title={"Dairy"}
          setValue={setDairy}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {dairy} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={fruitsVeggies}
          title={"Fruits and vegetables"}
          setValue={setFruitsVeggies}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {fruitsVeggies} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={snacks}
          title={"Snacks, drinks, etc..."}
          setValue={setSnacks}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {snacks} daily servings per person
          </span>
        </Slider>
      </div>
    </>
  );
}
