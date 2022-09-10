import axios from "axios";

// fran's key IaiMPnILtQ3ucGT3Ph0YBQ
const apiKey = "eud2mGH6jr5Ad1y581nWQ";

class CarbonAPI {
  authorization() {
    return axios({
      method: "get",
      url: "https://www.carboninterface.com/api/v1/auth",
      headers: {
        Authorization: "Bearer eud2mGH6jr5Ad1y581nWQ",
      },
    });
  }
  // IN USE: Page 2
  getVehicleEstimate(distanceValue) {
    return axios({
      method: "POST",
      url: "https://www.carboninterface.com/api/v1/estimates",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        type: "vehicle",
        distance_unit: "mi",
        distance_value: distanceValue,
        vehicle_model_id: "4050bebf-f62c-4caf-af5f-afc857906085",
      },
    });
  }

  getVehicleModels() {
    return axios({
      method: "get",
      url: "https://www.carboninterface.com/api/v1/vehicle_makes/2b1d0cd5-59be-4010-83b3-b60c5e5342da/vehicle_models",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }
  // Possible
  getFuelCombustion(fuelType, fuelUnit, fuelSourceValue) {
    return axios({
      method: "POST",
      url: "https://www.carboninterface.com/api/v1/estimates?",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        type: "fuel_combustion",
        fuel_source_type: fuelType,
        fuel_source_unit: fuelUnit,
        fuel_source_value: fuelSourceValue,
      },
    });
  }
  // IN USE: Page 3
  getFlightEstimate(passengers, departureAirport, destinationAirport) {
    return axios({
      method: "post",
      url: "https://www.carboninterface.com/api/v1/estimates",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        type: "flight",
        passengers: passengers,
        distance_unit: "mi",
        legs: [
          {
            departure_airport: departureAirport,
            destination_airport: destinationAirport,
          },
        ],
      },
    });
  }
  // IN USE: Page 1
  getElectricityEstimate(value, state) {
    return axios({
      method: "post",
      url: "https://www.carboninterface.com/api/v1/estimates",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        type: "electricity",
        electricity_unit: "kwh",
        electricity_value: value,
        country: "us",
        state: state,
      },
    });
  }

  getShippingEstimate(
    weightValue,
    weightUnit,
    distanceValue,
    distanceUnit,
    transportMethod
  ) {
    return axios({
      method: "post",
      url: "https://www.carboninterface.com/api/v1/estimates",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        type: "shipping",
        weight_value: weightValue,
        weight_unit: weightUnit,
        distance_value: distanceValue,
        distance_unit: distanceUnit,
        transport_method: transportMethod,
      },
    });
  }

  getVehicleMakes() {
    return axios({
      method: "get",
      url: "https://www.carboninterface.com/api/v1/vehicle_makes",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }
}

export default new CarbonAPI();
