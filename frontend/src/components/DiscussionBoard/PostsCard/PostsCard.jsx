import {
    ListGroup,
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading,
    CardBody,
    CardGroup,
    Card,
    CardTitle,
    Label,

  } from "reactstrap";
import { useState } from "react";
import styles from "./PostsCard.module.scss";
import { ArticlesCard } from "../../News/ArticlesCard/ArticlesCard";


export function PostsCard() {

      const [postArray, setList] = useState([
    {
      id: 1,
      title: "Minimizing my carbon footprint",
      posted_on: "May 15, 2022 05:35:32",
      selected: true
    },
    {
      id: 2,
      title: "My first farmers market experience",
      posted_on: "June 15, 2022 05:35:32",
      selected: true
    },
    {
      id: 3,
      title: "Hurricane Preparation Tips",
      posted_on: "June 15, 2022 05:35:32",
      selected: true
    },
    {
      id: 4,
      title: "My COVID-19 experience",
      posted_on: "June 15, 2022 05:35:32",
      selected: true
    },
    {
      id: 5,
      title: "A beginners guide to composting",
      posted_on: "July 1, 2022 05:35:32",
      selected: true
    },
  ]);

  const itemSelected = async (e) => {

    await setID(e);
    await getComments(e);

    if (showDiscuss === true)
      setShowDiscuss(false);
    else
      setShowDiscuss(true);
  }

  //justify-content-between
  //still working on this
const createPostsDisplay = (postArray) => {
  return (
        <CardGroup className={styles.underline} key={postArray.id}>
          <Label className="d-flex">          
            <input 
                className={styles.radio} 
                type="checkbox" 
                name="radio"  
                disabled
                checked={postArray.selected}
            />
            <div key={postArray.id} className={styles.postDisplay} onClick={ ()  => itemSelected(postArray.id)}>

              <Label className={styles.threadHeader} >
                {postArray.title}
              </Label>
              <br />
              <Label className={styles.threadDate}>
                Posted {new Date(postArray.posted_on).toDateString()}
              </Label>
    
            </div>
          </Label>
        </CardGroup>
  );
}

    return (
        <Card className={styles.cardFormatting}>
            <CardBody>
              <CardTitle className={styles.underlineTitle}>
                Conversations in Your Community
              </CardTitle>
              
              {postArray.map((postArray) => {
                  return (createPostsDisplay(postArray));})}

            </CardBody>
          </Card>
    )
};