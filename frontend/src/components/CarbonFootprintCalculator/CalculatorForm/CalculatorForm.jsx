import { useState } from "react";
import {
  BasicForm,
  TravelForm,
  HomeForm,
  FoodForm,
  ShoppingForm,
} from "./Forms";
import styles from "./CalculatorForm.module.scss";

export function CalculatorForm({ calcType }) {
  function getForm() {
    switch (calcType) {
      case "Get Started":
        return <BasicForm />;
      case "Travel":
        return <TravelForm />;
      case "Home":
        return <HomeForm />;
      case "Food":
        return <FoodForm />;
      case "Shopping":
        return <ShoppingForm />;
      default:
        return;
    }
  }
  return <div className={styles.mainContainer}>{getForm()}</div>;
}
