import { Button, CardBody, Card, CardTitle, Input, Dropdown } from "reactstrap";
import styles from "../../DiscussionBoard/DiscussionBoard.module.scss";
import DropdownComponent from "./Dropdown";
import { useState, useEffect } from "react";
import CarbonAPI from "../../../pages/api/CarbonAPI";

const highResultImg = "assets/high.png";
const midResultImg = "assets/mid.png";
const lowResultImg = "assets/low.png";

const Questions = ({ setButton, ...props }) => {
  let page = props.page;
  const [data, setData] = useState({
    home: "",
    electricitySource: "",
    electricityValue: "",
    miles: "",
    vehicleMake: "",
    vehicleModel: "",
    fuelType: "",
    departureAirport: "",
    arrivalAirport: "",
    flightPassengers: "",
    flightCabin: "",
  });
  useEffect(() => {
    if (page === 0) {
      if (
        data.home !== "" &&
        data.electricitySource !== "" &&
        data.electricityValue !== ""
      ) {
        setButton("");
      } else {
        setButton("none");
      }
    } else if (page === 1) {
      if (
        data.miles !== "" &&
        data.fuelType !== "" &&
        data.vehicleMake !== "" &&
        data.vehicleModel !== ""
      ) {
        setButton("");
      } else {
        setButton("none");
      }
    } else if (page === 2) {
      if (
        data.departureAirport !== "" &&
        data.arrivalAirport !== "" &&
        data.flightPassengers !== "" &&
        data.flightCabin !== ""
      ) {
        setButton("");
      } else {
        setButton("none");
      }
    }
  }, [data]);

  useEffect(() => {
    setButton("none");
    if (page === 3) {
      const val = data.electricityValue;
      if (val == 1500) {
        setElectric(highResultImg);
      } else if (val == 1000) {
        setElectric(midResultImg);
      } else if (val == 700) {
        setElectric(midResultImg);
      } else {
        setElectric(lowResultImg);
      }

      const vehicleValue = data.miles;
      if (vehicleValue == 80) {
        setVehicle(highResultImg);
      } else if (vehicleValue < 80 && vehicleValue > 20) {
        setVehicle(midResultImg);
      } else if (vehicleValue == 20) {
        setVehicle(lowResultImg);
      }

      CarbonAPI.getFlightEstimate(
        data.flightPassengers,
        data.departureAirport,
        data.arrivalAirport
      ).then(function (response) {
        const flightValue = response.data.data.attributes.carbon_g;
        if (flightValue < 10000000) {
          setFlight(lowResultImg);
        } else if (flightValue > 10000000 && flightValue < 40000000) {
          setFlight(midResultImg);
        } else if (flightValue > 40000000) {
          setFlight(highResultImg);
        }
      });
      setData({
        home: "",
        electricitySource: "",
        electricityValue: "",
        miles: "",
        vehicleMake: "",
        vehicleModel: "",
        fuelType: "",
        departureAirport: "",
        arrivalAirport: "",
        flightPassengers: "",
        flightCabin: "",
      });
    }
  }, [page]);

  const [electricResult, setElectric] = useState(midResultImg);
  const [vehicleResult, setVehicle] = useState(midResultImg);
  const [flightResult, setFlight] = useState(midResultImg);

  if (page === 0) {
    return (
      <CardBody height="514px">
        <CardTitle
          className={styles.underlineTitle}
          style={{ color: "#bf372c", fontWeight: "600", fontSize: "1.1em" }}
        >
          1. ELECTRICITY ESTIMATE
        </CardTitle>
        <div>
          Where is your home located?{" "}
          <DropdownComponent type="state" setData={setData} data={data} />
        </div>
        <div style={{ marginTop: "50px" }}>
          What is the main source of your electricity?{" "}
        </div>
        <div style={{ padding: "15px", display: "flex" }}>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="Natural Gas"
                name="source"
                onChange={(e) =>
                  setData({ ...data, electricitySource: e.target.value })
                }
              />
            </div>
            <div>Natural Gas</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="Fossil Fuel"
                name="source"
                onChange={(e) =>
                  setData({ ...data, electricitySource: e.target.value })
                }
              />
            </div>
            <div>Fossil Fuel</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="Renewable Energy"
                name="source"
                onChange={(e) =>
                  setData({ ...data, electricitySource: e.target.value })
                }
              />
            </div>
            <div>Renewable Energy</div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          How much is your homes average electricity consumption per month?
        </div>
        <div style={{ padding: "15px", display: "flex" }}>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="1500"
                name="electricValue"
                onChange={(e) =>
                  setData({ ...data, electricityValue: e.target.value })
                }
              />
            </div>
            <div>Very High</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="1000"
                name="electricValue"
                onChange={(e) =>
                  setData({ ...data, electricityValue: e.target.value })
                }
              />
            </div>
            <div>High</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="700"
                name="electricValue"
                onChange={(e) =>
                  setData({ ...data, electricityValue: e.target.value })
                }
              />
            </div>
            <div>Low</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="400"
                name="electricValue"
                onChange={(e) =>
                  setData({ ...data, electricityValue: e.target.value })
                }
              />
            </div>
            <div>Very Low</div>
          </div>
        </div>
      </CardBody>
    );
  } else if (page === 1) {
    return (
      <CardBody height="514px">
        <CardTitle
          className={styles.underlineTitle}
          style={{ color: "#bf372c", fontWeight: "600", fontSize: "1.1em" }}
        >
          2: VEHICLE ESTIMATE
        </CardTitle>
        <div>
          How many miles do you drive on average each day?
          <div style={{ padding: "15px", display: "flex" }}>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="20"
                  name="miles"
                  onChange={(e) => setData({ ...data, miles: e.target.value })}
                />
              </div>
              <div>0-20 miles</div>
            </div>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="40"
                  name="miles"
                  onChange={(e) => setData({ ...data, miles: e.target.value })}
                />
              </div>
              <div>20-40 miles</div>
            </div>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="60"
                  name="miles"
                  onChange={(e) => setData({ ...data, miles: e.target.value })}
                />
              </div>
              <div>40-60 miles</div>
            </div>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="80"
                  name="miles"
                  onChange={(e) => setData({ ...data, miles: e.target.value })}
                />
              </div>
              <div>60+ miles</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          What is the make of your vehicle?
        </div>
        <div style={{ paddingTop: "15px" }}>
          <DropdownComponent type="vehicleMake" setData={setData} data={data} />
        </div>
        <div style={{ marginTop: "30px" }}>What is your vehicle model?</div>
        <div style={{ paddingTop: "15px" }}>
          <DropdownComponent
            type="vehicleModel"
            setData={setData}
            data={data}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          What type of fuel you use in your car?
          <div style={{ padding: "15px", display: "flex" }}>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="Gas"
                  name="fueltype"
                  onChange={(e) =>
                    setData({ ...data, fuelType: e.target.value })
                  }
                />
              </div>
              <div>Gas</div>
            </div>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="Diesel"
                  name="fueltype"
                  onChange={(e) =>
                    setData({ ...data, fuelType: e.target.value })
                  }
                />
              </div>
              <div>Diesel</div>
            </div>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="Electricity"
                  name="fueltype"
                  onChange={(e) =>
                    setData({ ...data, fuelType: e.target.value })
                  }
                />
              </div>
              <div>Electricity</div>
            </div>
            <div style={{ display: "flex", marginRight: "45px" }}>
              <div style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  value="Hybrid"
                  name="fueltype"
                  onChange={(e) =>
                    setData({ ...data, fuelType: e.target.value })
                  }
                />
              </div>
              <div>Hybrid</div>
            </div>
          </div>
        </div>
      </CardBody>
    );
  } else if (page === 2) {
    return (
      <CardBody height="514px">
        <CardTitle
          className={styles.underlineTitle}
          style={{ color: "#bf372c", fontWeight: "600", fontSize: "1.1em" }}
        >
          3: FLIGHT ESTIMATE
        </CardTitle>
        <div style={{ fontWeight: "800", marginBottom: "15px" }}>
          Google your airport's 3 character AITA Code to answer these questions
        </div>

        <div>What is your mostly used departure airport?</div>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setData({ ...data, departureAirport: e.target.value })
            }
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          What is your mostly used arrival airport?
        </div>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setData({ ...data, arrivalAirport: e.target.value })
            }
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          About how many people do you usually fly with?
        </div>
        <div style={{ padding: "10px", display: "flex" }}>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="50"
                name="passengers"
                onChange={(e) =>
                  setData({ ...data, flightPassengers: e.target.value })
                }
              />
            </div>
            <div>0-50</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="150"
                name="passengers"
                onChange={(e) =>
                  setData({ ...data, flightPassengers: e.target.value })
                }
              />
            </div>
            <div>50-150</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="300"
                name="passengers"
                onChange={(e) =>
                  setData({ ...data, flightPassengers: e.target.value })
                }
              />
            </div>
            <div>150-300</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="400"
                name="passengers"
                onChange={(e) =>
                  setData({ ...data, flightPassengers: e.target.value })
                }
              />
            </div>
            <div>More than 300</div>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          Which cabin do you usually use to fly?
        </div>
        <div style={{ padding: "10px", display: "flex" }}>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="First Class"
                name="cabin"
                onChange={(e) =>
                  setData({ ...data, flightCabin: e.target.value })
                }
              />
            </div>
            <div>First Class</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="Business"
                name="cabin"
                onChange={(e) =>
                  setData({ ...data, flightCabin: e.target.value })
                }
              />
            </div>
            <div>Business</div>
          </div>
          <div style={{ display: "flex", marginRight: "45px" }}>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value="Economy"
                name="cabin"
                onChange={(e) =>
                  setData({ ...data, flightCabin: e.target.value })
                }
              />
            </div>
            <div>Economy</div>
          </div>
        </div>
      </CardBody>
    );
  } else {
    return (
      <div>
        <div
          style={{
            marginTop: "70px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              padding: "20px",
              fontWeight: "800",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "20px",color: "#bf372c" }}>Electricity Estimate</div>
            <img height="100px" src={electricResult} />
          </div>
          <div
            style={{
              padding: "20px",
              fontWeight: "800",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "20px",color: "#bf372c" }}>Vehicle Estimate</div>
            <img height="100px" src={vehicleResult} />
          </div>
          <div
            style={{
              padding: "20px",
              marginLeft: "10px",
              fontWeight: "800",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "20px",color: "#bf372c" }}>Flight Estimate</div>
            <img height="100px" src={flightResult} />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
};

export default Questions;
