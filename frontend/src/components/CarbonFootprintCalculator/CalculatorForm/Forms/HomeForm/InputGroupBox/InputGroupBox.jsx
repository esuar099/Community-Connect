import {
  InputGroup,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { useState } from "react";
import styles from "./InputGroupBox.module.scss";
export function InputGroupBox({ title, placeholder, units, setValue }) {
  const [isUnitOpen, setIsUnitOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("$");
  const [selectedTime, setSelectedTime] = useState("/ yr");

  function getDropdownItems() {
    return units.map((unit) => {
      return (
        <DropdownItem key={unit} onClick={() => setSelectedUnit(unit)}>
          {unit}
        </DropdownItem>
      );
    });
  }

  return (
    <div>
      <h6>{title}</h6>
      <InputGroup>
        <Input
          placeholder={placeholder}
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonDropdown
          toggle={() => setIsUnitOpen(!isUnitOpen)}
          isOpen={isUnitOpen}
        >
          <DropdownToggle
            className={`bg-light text-dark ${styles.dropdownBtn}`}
            caret
          >
            {selectedUnit}
          </DropdownToggle>
          <DropdownMenu>{getDropdownItems()}</DropdownMenu>
        </ButtonDropdown>
        <ButtonDropdown
          toggle={() => setIsTimeOpen(!isTimeOpen)}
          isOpen={isTimeOpen}
        >
          <DropdownToggle
            className={`bg-light text-dark ${styles.dropdownBtn}`}
            caret
          >
            {selectedTime}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setSelectedTime("/ yr")}>
              / yr
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedTime("/ mo")}>
              / mo
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </InputGroup>
    </div>
  );
}
