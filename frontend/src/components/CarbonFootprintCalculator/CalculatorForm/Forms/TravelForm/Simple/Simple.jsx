import { Input, InputGroup, InputGroupText } from "reactstrap";
import styles from "./Simple.module.scss";

export function Simple({ setPublicTransit, setAirTravel }) {
  return (
    <div className={styles.container}>
      <div>
        <h6>Public Transit</h6>
        <InputGroup>
          <Input
            placeholder="991"
            onClick={(e) => setPublicTransit(e.target.value)}
            type="number"
          />
          <InputGroupText>mi/yr</InputGroupText>
        </InputGroup>
      </div>
      <div>
        <h6>Air Travel</h6>
        <InputGroup>
          <Input
            placeholder="8900"
            onClick={(e) => setAirTravel(e.target.value)}
            type="number"
          />
          <InputGroupText>mi/yr</InputGroupText>
        </InputGroup>
      </div>
    </div>
  );
}
