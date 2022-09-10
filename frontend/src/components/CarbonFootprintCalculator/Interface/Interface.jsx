import { useState, useEffect } from "react";
import { Graph } from "../Graph";
import { CalculatorForm } from "../CalculatorForm";
import stylesInterface from "./Interface.module.scss";
import axios from "axios";
import CarbonAPI from "../../../pages/api/CarbonAPI";
import { Button, CardBody, Card, CardTitle, Input, Dropdown } from "reactstrap";
import styles from "../../DiscussionBoard/DiscussionBoard.module.scss";
// Authorization: Bearer eud2mGH6jr5Ad1y581nWQ
import myimage from "../../../../public/assets/carbonfootptintcalculator.png";
import nextArrow from "../../../../public/assets/next-arrow.png";
//frontend\public\assets\next-arrow.png
import Info from "./Info";
import DropdownComponent from "./Dropdown";
import Questions from "./Questions";

export function Interface() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page === 3) {
      setPage(0);
    } else if (page === 2) {
      setPage(page + 1);
    } else {
      setPage(page + 1);
    }
  };

  
  const[activeButton, setButton] = useState("none");

  return (
    <div
      style={{ display: "flex", margin: "0 auto", justifyContent: "center" }}
    >
      <Info />
      <div style={{ marginLeft: "50px", minWidth: "800px" }}>
        <Card
          className={styles.cardFormatting}
          style={{ minHeight: "430px", maxHeight: "430px" }}
        >
          <Questions page={page} setButton={setButton}/>
          {page < 3 ? (
            <div style={{ textAlign: "right" }}>
              <button
                onClick={() => nextPage()}

                style={{
                  pointerEvents:activeButton,
                  border: "none",
                  position: "absolute",
                  right: "10px",
                  bottom: "15px",
                  backgroundColor: "Transparent",
                }}
              >
                <img height="60px" src="assets/next-arrow.png" />
              </button>
            </div>
          ) : (
            <div
              style={{ right: "20px", bottom: "20px", position: "absolute" }}
              
            >
              <button className={styles.buttonStyles} onClick={() => nextPage()}>restart</button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}