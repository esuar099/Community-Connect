import { Button, Card, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "./Forgot.module.scss";

export default function Forgot() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Form>
          <FormGroup className={styles.formGroup}>
            <Label for="exampleEmail" className={styles.label}>
              Enter an email address to begin the account recovery process.
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your email address"
            />
          </FormGroup>
        </Form>
        <Button className={`${styles.actionButton} ${styles.button}`}>
          Send link
        </Button>
      </Card>
    </div>
  );
}
