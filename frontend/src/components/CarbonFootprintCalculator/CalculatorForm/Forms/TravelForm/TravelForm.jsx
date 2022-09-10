import { useState } from "react";
import { Input, Button, ButtonToolbar, ButtonGroup } from "reactstrap";
import { Vehicle } from "./Vehicle";
import { Simple } from "./Simple";
import { Advanced } from "./Advanced";
import styles from "./TravelForm.module.scss";

export function TravelForm() {
  // simple form
  const [airTravel, setAirTravel] = useState("8900");
  const [publicTransit, setPublicTransit] = useState("991");

  // advanced form
  const [bus, setBus] = useState("991");
  const [transitRail, setTransitRail] = useState("991");
  const [comRail, setComRail] = useState("991");
  const [innerRail, setInnerRail] = useState("991");
  const [short, setShort] = useState("991");
  const [medium, setMedium] = useState("991");
  const [long, setLong] = useState("991");
  const [extended, setExtended] = useState("991");

  const [isSimple, setIsSimple] = useState(true);
  const [vehicles, setVehicles] = useState([
    {
      id: Math.random() * 10000000,
      type: "Gasoline",
      mpg: "20",
    },
    {
      id: Math.random() * 10000000,
      type: "Gasoline",
      mpg: "20",
    },
  ]);

  function getVehicles() {
    return vehicles.map((vehicle) => {
      return (
        <Vehicle
          key={vehicle.id}
          vehicle={vehicle}
          vehicles={vehicles}
          setVehicles={setVehicles}
        />
      );
    });
  }

  function addVehicle() {
    setVehicles([...vehicles, createVehicle()]);
  }

  function createVehicle() {
    return {
      id: Math.random() * 10000000,
      type: "Gasoline",
      mpg: "20",
    };
  }

  return (
    <div className={styles.mainContainer}>
      <h5 className={styles.formTitle}>How do you get around?</h5>
      <div className={styles.vehicleTitleContainer}>
        <h6>Your vehicles</h6>
        <Button
          onClick={addVehicle}
          className="btn-light btn-sm btn-outline-primary"
        >
          Add Vehicle
        </Button>
      </div>
      {getVehicles()}
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
        <Simple {...{ setAirTravel, setPublicTransit }} />
      ) : (
        <Advanced
          {...{
            setBus,
            setTransitRail,
            setComRail,
            setInnerRail,
            setShort,
            setMedium,
            setLong,
            setExtended,
          }}
        />
      )}
    </div>
  );
}
