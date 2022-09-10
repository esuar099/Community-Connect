import { useState } from "react";
import { Input } from "reactstrap";
import { Slider } from "../../Slider";
import styles from "./BasicForm.module.scss";

export function BasicForm() {
  const [householdTotal, setHouseholdTotal] = useState("1");
  const [householdIncome, setHouseholdIncome] = useState("0");
  const [zipcode, setZipcode] = useState("");

  return (
    <div className={styles.mainContainer}>
      <h5 className={styles.formTitle}>Start with a quick estimate</h5>
      <div>
        <h6>Where do you live?</h6>
        <Input
          placeholder="Enter city or zipcode"
          type="search"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>
      <Slider
        value={householdTotal}
        title={"How many people live in your household?"}
        setValue={setHouseholdTotal}
        units={["1", "2", "3", "4", "5+"]}
        min="1"
        max="5"
        step="1"
      />
      <Slider
        value={householdIncome}
        title={"What is your gross annual household income?"}
        setValue={setHouseholdIncome}
        units={[
          "<10k",
          "10k",
          "20k",
          "30k",
          "40k",
          "50k",
          "60k",
          "80k",
          "100k",
          "120k+",
        ]}
        min="0"
        max="90"
        step="10"
      />
    </div>
  );
}
