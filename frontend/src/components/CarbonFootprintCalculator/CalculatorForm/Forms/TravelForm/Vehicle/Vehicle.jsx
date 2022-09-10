import {
  InputGroup,
  InputGroupText,
  Input,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { useState, useEffect } from "react";
import { Slider } from "../../../Slider";
import styles from "./Vehicle.module.scss";

export function Vehicle({ vehicle, vehicles, setVehicles }) {
  const [milesPerGallon, setMilesPerGallon] = useState("10");
  const [milesPerYear, setMilesPerYear] = useState("24000");
  const [selectedCategory, setSelectedCategory] = useState("Gasoline");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    vehicle.mpg = milesPerGallon;
    vehicle.milesPerYear = milesPerYear;
    vehicle.type = selectedCategory;
    vehicles.map((v) => {
      if (v.id === vehicle.id) return vehicle;
      else return v;
    });
  }, [milesPerGallon, milesPerYear, selectedCategory]);

  function removeVehicle() {
    setVehicles(vehicles.filter((v) => vehicle.id !== v.id));
  }

  return (
    <div>
      <InputGroup>
        <ButtonDropdown toggle={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <DropdownToggle
            className={`bg-light text-dark ${styles.dropdownBtn}`}
            caret
          >
            {selectedCategory}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setSelectedCategory("Gasoline")}>
              Gasoline
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedCategory("Diesel")}>
              Diesel
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedCategory("Electric")}>
              Electric
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Input
          placeholder="24000"
          type="number"
          onChange={(e) => setMilesPerYear(e.target.value)}
        />
        <InputGroupText>mi/yr</InputGroupText>
        <Button className="btn-danger" onClick={removeVehicle}>
          X
        </Button>
      </InputGroup>
      <Slider
        value={milesPerGallon}
        title={""}
        setValue={setMilesPerGallon}
        units={[
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100",
          "110",
        ]}
        min="10"
        max="110"
        step="1"
      >
        <span>{milesPerGallon} mpg</span>
      </Slider>
    </div>
  );
}
