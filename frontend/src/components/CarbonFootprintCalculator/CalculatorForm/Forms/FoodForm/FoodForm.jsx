import { useState } from "react";
import { Advanced } from "./Advanced";
import { Simple } from "./Simple";
import { ButtonToolbar, ButtonGroup, Button } from "reactstrap";
import styles from "./FoodForm.module.scss";

export function FoodForm() {
  // for advanced form
  const [meat, setMeat] = useState("1");
  const [poultry, setPoultry] = useState("1");
  const [otherMeat, setOtherMeat] = useState("1");
  const [fish, setFish] = useState("1");

  // for simple form
  const [meatFishEggs, setMeatFishEggs] = useState("1");

  // simple & advanced forms
  const [bakedGoods, setBakedGoods] = useState("1");
  const [dairy, setDairy] = useState("1");
  const [fruitsVeggies, setFruitsVeggies] = useState("1");
  const [snacks, setSnacks] = useState("1");

  // toggle between simple & advanced forms
  const [isSimple, setIsSimple] = useState(true);

  return (
    <div className={styles.mainContainer}>
      <h5 className={styles.formTitle}>
        How much does the average person in your household eat?
      </h5>
      <ButtonToolbar className={styles.buttonContainer}>
        <ButtonGroup>
          <Button
            className={`${styles.actionButton} ${styles.toggleBtn} ${
              isSimple ? styles.selectedBtn : ""
            }`}
            onClick={() => setIsSimple(true)}
          >
            Simple
          </Button>
          <Button
            className={`${styles.actionButton} ${styles.toggleBtn} ${
              !isSimple ? styles.selectedBtn : ""
            }`}
            onClick={() => setIsSimple(false)}
          >
            Advanced
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      {isSimple ? (
        <Simple
          {...{
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
          }}
        />
      ) : (
        <Advanced
          {...{
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
          }}
        />
      )}
    </div>
  );
}
