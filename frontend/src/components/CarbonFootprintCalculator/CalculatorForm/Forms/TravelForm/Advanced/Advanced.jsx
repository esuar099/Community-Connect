import { Input, InputGroup, InputGroupText } from "reactstrap";
import styles from "./Advanced.module.scss";

export function Advanced({
  setBus,
  setTransitRail,
  setComRail,
  setInnerRail,
  setShort,
  setMedium,
  setLong,
  setExtended,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h6>Public Transit</h6>
        <div>
          <h7>Bus</h7>
          <InputGroup>
            <Input
              placeholder="397"
              onClick={(e) => setBus(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Transit Rail (light &#38; heavy)</h7>
          <InputGroup>
            <Input
              placeholder="297"
              onClick={(e) => setTransitRail(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Commuter Rail</h7>
          <InputGroup>
            <Input
              placeholder="198"
              onClick={(e) => setComRail(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Inter-city Rail (Amtrak)</h7>
          <InputGroup>
            <Input
              placeholder="99"
              onClick={(e) => setInnerRail(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <h6>Air Travel</h6>
        <div>
          <h7>Short (&#60; 400 mi/yr)</h7>
          <InputGroup>
            <Input
              placeholder="1"
              onClick={(e) => setShort(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Medium (400 - 1500 mi/yr)</h7>
          <InputGroup>
            <Input
              placeholder="0"
              onClick={(e) => setMedium(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Long (1500 - 3000 mi/yr)</h7>
          <InputGroup>
            <Input
              placeholder="0"
              onClick={(e) => setLong(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Extended (&#62; 3000 mi/yr)</h7>
          <InputGroup>
            <Input
              placeholder="0"
              onClick={(e) => setExtended(e.target.value)}
              type="number"
            />
            <InputGroupText>mi/yr</InputGroupText>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
