import {
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    ListGroup,
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading,
    UncontrolledCollapse,
    Form,
    FormGroup,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    CardGroup,
    CardHeader,
    CardBody,
    Card,
    CardTitle,
    CardText,
    CardSubtitle,
    Label,
    Input,
  } from "reactstrap";
  import styles from "./About.module.scss";

  export function AboutComponent() {

    return(
        <Card className= {styles.cards}>
          <CardBody>
            <CardTitle className= {styles.title}>
              Project Information
            </CardTitle>
            <CardText className= {styles.text}>
              Community Connect is a platform for resilient and sustainable communities. It provides a place for the community members to learn about the urgent issues in their community, discuss and share concerns about the sustainability of the environment, access critical products, and learn about the impact of their consumption patterns on the environment.
            </CardText>
            
            <CardTitle className= {styles.title}>
              Team
            </CardTitle>
            <CardText className= {styles.text}>
            Shahin Vassigh: Professor of Architecture,
            Shu-Ching Chen: Professor of Computer Science,
            Biayna Bogosian: Assistant Professor of Architecture,
            Eric Peterson: Teaching Professor of Architecture,
            John Stuart: Professor of Architecture
            </CardText>
            <CardTitle className= {styles.title}>
              Publications
            </CardTitle>
            <CardText className= {styles.text} style= {{font: 'normal normal bold 13px/16px Poppins'}}>
              Bogosian, B., Vassigh, S., Stuart, J., Chen, S. C., & Coltey, E. (2022). Community-Connect: A Platform for Sustainability Resource Exchange in Post-pandemic Smart Cities. In Proceedings of the 2021 AIA/ACSA Intersections Research Conference: COMMUNITIES, online. 
              <br></br><br></br>
              Coltey, E., Vassigh, S., & Chen, S., (2022), Towards an AI-Driven Marketplace for Small Businesses During COVID-19, Sn Computer Science Springer Journal, accepted.
              <br></br><br></br>
              Coltey, E., Vassigh, S., & Chen, S. C. (2021). Community-Connect: COVID-19 Small Business Marketplace with Automated Regulation Matching and Company Lead Retrieval. IEEE 22nd International Conference on Information Reuse and Integration for Data Science (IRI) (pp. 57-60). IEEE.
              <br></br><br></br>
              Biayna, B., Stuart, J., Sabin, J. McEwen, M., Jimenez Garcia, M. & Huang, A. (2021) DigitalFUTURES: Operation PPE + Informal Fabrication. DigitalFUTURES World panel discussion <br></br><a href="https://www.youtube.com/watch?v=4ZZdWOV7BfY">https://www.youtube.com/watch?v=4ZZdWOV7BfY</a>.
              <br></br><br></br>
              Coltey, E., Tao, Y., Wang, T., Vassigh, S., Chen, S. C., & Shyu, M. L. (2021). Generalized structure for adaptable immersive learning environments. IEEE 22nd International Conference on Information Reuse and Integration for Data Science (IRI) (pp. 294-301).

            </CardText>
            <CardTitle className= {styles.title}>
              Acknowledgements
            </CardTitle>
            <CardText className= {styles.text}>
              This project was made possible by grant from the <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2029557&HistoricalAwards=false">National Science Foundation</a>.
            </CardText>

          </CardBody>
        </Card>
    );
  }