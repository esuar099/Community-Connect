import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styles from "./Accordion.module.scss";

export const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={styles.accordionGroup}>
      <Button onClick={toggle} className={styles.accordionTitle}>
        {title}
      </Button>
      <Collapse className={styles.accordionCollapse} isOpen={isOpen}>
        <Card>
          <CardBody>{description}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
};
