import { Input, InputGroup, InputGroupText } from "reactstrap";
import styles from "./Advanced.module.scss";

export function Advanced({
  setGoodsFurniture,
  setGoodsClothing,
  setGoodsEntertainment,
  setGoodsPaperOffice,
  setGoodsPersonalCare,
  setGoodsAutoParts,
  setGoodsMedical,
  setServicesHealthCare,
  setServicesInfo,
  setServicesMedical,
  setServicesVehicle,
  setServicesPersonalBusiness,
  setServicesHouse,
  setServicesOrganizations,
  setServicesOther,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h6>Goods</h6>
        <div>
          <h7>Furniture &#38; appliances</h7>
          <InputGroup>
            <Input
              placeholder="505"
              onClick={(e) => setGoodsFurniture(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Clothing</h7>
          <InputGroup>
            <Input
              placeholder="507"
              onClick={(e) => setGoodsClothing(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Entertainment</h7>
          <InputGroup>
            <Input
              placeholder="308"
              onClick={(e) => setGoodsEntertainment(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Paper, office, &#38; reading</h7>
          <InputGroup>
            <Input
              placeholder="40"
              onClick={(e) => setGoodsPaperOffice(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Personal care &#38; cleaning</h7>
          <InputGroup>
            <Input
              placeholder="130"
              onClick={(e) => setGoodsPersonalCare(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Auto parts</h7>
          <InputGroup>
            <Input
              placeholder="48"
              onClick={(e) => setGoodsAutoParts(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Medical</h7>
          <InputGroup>
            <Input
              placeholder="104"
              onClick={(e) => setGoodsMedical(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <h6>Services</h6>
        <div>
          <h7>Health Care</h7>
          <InputGroup>
            <Input
              placeholder="1170"
              onClick={(e) => setServicesHealthCare(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Information &#38; Communication</h7>
          <InputGroup>
            <Input
              placeholder="494"
              onClick={(e) => setServicesInfo(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Medical</h7>
          <InputGroup>
            <Input
              placeholder="180"
              onClick={(e) => setServicesMedical(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Vehical service</h7>
          <InputGroup>
            <Input
              placeholder="287"
              onClick={(e) => setServicesVehicle(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Personal business &#38; finance</h7>
          <InputGroup>
            <Input
              placeholder="1175"
              onClick={(e) => setServicesPersonalBusiness(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Household maintenance &#38; repair</h7>
          <InputGroup>
            <Input
              placeholder="45"
              onClick={(e) => setServicesHouse(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Organization &#38; Charity</h7>
          <InputGroup>
            <Input
              placeholder="327"
              onClick={(e) => setServicesOrganizations(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
        <div>
          <h7>Other services</h7>
          <InputGroup>
            <Input
              placeholder="185"
              onClick={(e) => setServicesOther(e.target.value)}
              type="number"
            />
            <InputGroupText>$/month</InputGroupText>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
