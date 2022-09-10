import { useState } from "react";
import { ButtonToolbar, ButtonGroup, Button } from "reactstrap";
import { Simple } from "./Simple";
import { Advanced } from "./Advanced";
import styles from "./ShoppingForm.module.scss";

export function ShoppingForm() {
  // advanced form
  const [goodsFurniture, setGoodsFurniture] = useState("505");
  const [goodsClothing, setGoodsClothing] = useState("507");
  const [goodsEntertainment, setGoodsEntertainment] = useState("308");
  const [goodsPaperOffice, setGoodsPaperOffice] = useState("40");
  const [goodsPersonalCare, setGoodsPersonalCare] = useState("130");
  const [goodsAutoParts, setGoodsAutoParts] = useState("48");
  const [goodsMedical, setGoodsMedical] = useState("104");
  const [servicesHealthCare, setServicesHealthCare] = useState("1170");
  const [servicesInfo, setServicesInfo] = useState("494");
  const [servicesMedical, setServicesMedical] = useState("180");
  const [servicesVehicle, setServicesVehicle] = useState("287");
  const [servicesPersonalBusiness, setServicesPersonalBusiness] =
    useState("1175");
  const [servicesHouse, setServicesHouse] = useState("45");
  const [servicesOrganizations, setServicesOrganizations] = useState("327");
  const [servicesOther, setServicesOther] = useState("185");

  // simple form
  const [goods, setGoods] = useState("1");
  const [services, setServices] = useState("1");
  // toggle between simple & advanced forms
  const [isSimple, setIsSimple] = useState(true);

  return (
    <div className={styles.mainContainer}>
      <h5 className={styles.formTitle}>
        How much you spend on each of the following?
      </h5>
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
        <Simple {...{ goods, setGoods, services, setServices }} />
      ) : (
        <Advanced
          {...{
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
          }}
        />
      )}
    </div>
  );
}
