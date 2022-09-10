import { Dropdown,
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
  React
} from "reactstrap";
import { CgChevronDown } from "react-icons/cg";
import { useState, useEffect, setList, useRef } from "react";
//import React from "react";
import styles from "./ArticlesCard.module.scss";
import { useRouter } from 'next/router'
// temp
import axios from "axios";

export function ArticlesCard() {

  const [state, setState] = useState(false);
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "Climate Change Is Making Hurricanes Stronger, Researchers Find.",
            date: "Posted  February 2, 2022",
            selected: true
            
        },
        {
            id: 2,
            title: "Florida COVID update: Hospitalizations reverse trend and fall by 317.",
            date: "Posted January 10, 2022",
            selected: true
        },
        {
            id: 3,
            title: "Florida  break single-day COVID record with 76,887 cases. Cases soar in South Florida.",
            date: "Posted January 7, 2022",
            selected: true
        },
        {
            id: 4,
            title: "Lumber scarcity will make it pricy to board up your home this hurricane season.",
            date: "Posted January 3, 2021",
            selected: true
        },
        {
            id: 5,
            title: "To curb pollution, Miami Beach bans plastic straws and stirrers citywide.",
            date: "Posted December 21, 2021",
            selected: true
        },

    ]);

  const checkboxSelector = (id) => {
    
  }

const createSearchTypeCheckbox = (id) => {
  return (
    <input 
          className={styles.checkbox} 
          type="radio" 
          name="searchType"  
          defaultChecked={id == 0}
    />
  );
}

//justify-content-between
const createArticleDisplay = (article) => {
  return (
      <CardGroup className={styles.underline} key={article.id}>
          <Label className="d-flex">
          <input 
              className={styles.radio} 
              type="checkbox" 
              name="radio"  
              disabled
              checked={article.selected}
          />

          <div className={styles.articleDisplay}>
           <Label className={styles.articleTitle}>{article.title}</Label>
            <br />
           <Label className={styles.articleDate}>{article.date}</Label>
          </div>
          
          </Label>
      </CardGroup>
  );
}

  return (
    <Card className={styles.cards}>
      <CardBody>
        <CardTitle className={styles.underlineTitle}>
          Learn sustainable ways of supporting your city
        </CardTitle>
        <div className="d-flex">
          <Label className={styles.articleCategory} >
            News Articles 
            {createSearchTypeCheckbox(0)}
          </Label>

          <Label className={styles.articleCategory} >
            Research Papers  
            {createSearchTypeCheckbox(1)}
          </Label>

          <Label className={styles.articleCategory} >
            Videos 
            {createSearchTypeCheckbox(2)}
          </Label>
        </div>
        {articles.map((article) => {return (createArticleDisplay(article));})}
      </CardBody>
    </Card>
  );
}