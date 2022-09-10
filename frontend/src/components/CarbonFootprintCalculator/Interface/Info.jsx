import { Button, CardBody, Card, CardTitle, Input } from "reactstrap";
import styles from "../../DiscussionBoard/DiscussionBoard.module.scss";

const Info = () => {
  return (
    <div>
      <div>
        <Card className={styles.cardFormatting} style={{ minHeight: "430px", maxWidth:"430px" }}>
          <CardBody>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#bf372c",
                fontWeight: "600",
                fontSize: "1.1em",
              }}
            >
              What is your Carbon Footprint?
            </CardTitle>
            <div style={{ fontSize: "50px", textAlign: "center" }}>
              <img
                width="200"
                height="200"
                src="assets/carbonfootptintcalculator.png"
              />
            </div>

            <div
              style={{
                textAlign: "Center",
                fontWeight: "600",
                color: "#0b3954",
              }}
            >
              Use our calculator to learn about your share of carbon emission,
              evaluate your biggest source of contribution, and think of ways to
              reduce your impact on earth!
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Info;
