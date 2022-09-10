import { Slider } from "../../../Slider";
import styles from "./Advanced.module.scss";

export function Advanced({
  meat,
  setMeat,
  poultry,
  setPoultry,
  otherMeat,
  setOtherMeat,
  fish,
  setFish,
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
          value={meat}
          title={"Beef, pork, lamb, veal"}
          setValue={setMeat}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {meat} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={fish}
          title={"Fish & seafood"}
          setValue={setFish}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {fish} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={otherMeat}
          title={
            "Other meat and meat alternatives (processed meats, nuts, etc.)"
          }
          setValue={setOtherMeat}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {otherMeat} daily servings per person
          </span>
        </Slider>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={poultry}
          title={"Poultry & eggs"}
          setValue={setPoultry}
          units={["0x", "Average", "2x", "3x"]}
          min="0"
          max="3"
          step="0.1"
        >
          <span className={styles.dailyAmount}>
            {poultry} daily servings per person
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
