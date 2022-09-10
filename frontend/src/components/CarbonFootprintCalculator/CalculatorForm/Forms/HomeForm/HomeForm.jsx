import { useState } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { Slider } from "../../Slider";
import { InputGroupBox } from "./InputGroupBox";
import styles from "./HomeForm.module.scss";

export function HomeForm() {
  // sliders
  const [cleanEnergyPurchased, setCleanEnergyPurchased] = useState("0");
  const [waterUsage, setWaterUsage] = useState("1");
  // input boxes
  const [electricity, setElectricity] = useState("2680");
  const [naturalGas, setNaturalGas] = useState("507");
  const [otherFuels, setOtherFuels] = useState("10");
  const [livingSpaceArea, setLivingSpaceArea] = useState("2500");

  return (
    <div className={styles.mainContainer}>
      <h5 className={styles.formTitle}>How much do you use in your home?</h5>
      <InputGroupBox
        title={"Electricity"}
        placeholder={2680}
        units={["$", "kWh"]}
        setValue={setElectricity}
      />
      <Slider
        value={cleanEnergyPurchased}
        title={"Percent purchased from a clean energy program:"}
        setValue={setCleanEnergyPurchased}
        units={["0", "20", "40", "60", "80", "100"]}
        min="0"
        max="100"
        step="1"
      >
        <span>{cleanEnergyPurchased}%</span>
      </Slider>
      <InputGroupBox
        title={"Natural Gas"}
        placeholder={570}
        units={["$", "therms", "cubic ft"]}
        setValue={setNaturalGas}
      />
      <InputGroupBox
        title={"Heating Oil & Other Fuels"}
        placeholder={10}
        units={["$", "gal"]}
        setValue={setOtherFuels}
      />
      <div>
        <h6>Living space area</h6>
        <InputGroup>
          <Input
            placeholder="2500"
            type="number"
            onChange={(e) => setLivingSpaceArea(e.target.value)}
          />
          <InputGroupText>
            ft<sup>2</sup>
          </InputGroupText>
        </InputGroup>
      </div>
      <Slider
        value={waterUsage}
        title={"Water Usage"}
        setValue={setWaterUsage}
        units={["0", "1x", "2x", "3x"]}
        min="0"
        max="3"
        step="0.01"
      >
        <span>{Math.floor(waterUsage * 100)}% of similar households</span>
      </Slider>
    </div>
  );
}
