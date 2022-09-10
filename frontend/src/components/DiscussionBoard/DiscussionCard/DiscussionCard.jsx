import {
    Button,
    CardBody,
    Card,
    CardTitle,
    Input,
  } from "reactstrap";
import { useState } from "react";
import styles from "./DiscussionCard.module.scss";
import axios from "axios";

export function DiscussionCard(post) {

    const [forumState, setForumState] = useState({
        title: "",
        description: "",
    
      });
    //console.log(post);

    const onSubmit = () => {

        axios
          .post("forum/thread/", forumState)
          .then((response) => {
            console.log("successful post")
            setChange(!change)
            //router.reload();
          })
          .catch(error => console.log(error));;
      }
    console.log(post);

    return (
        <Card className={styles.cardFormatting}>
          <CardBody height="514px">
            <CardTitle className={styles.underlineTitle}>
                Start a Discussion
            </CardTitle>

            <textarea
                className={styles.postTittleInput}
                name="thread-title"
                id="thread"
                placeholder="Add a title"
                onChange={(event) => setForumState({ ...forumState, title: event.target.value })}></textarea>
            
            <textarea 
                className={styles.postArea} placeholder={'Your discussion here...'} onChange={(event) => setForumState({ ...forumState, description: event.target.value })}></textarea>
            
            <Button className={styles.postButton} onClick={onSubmit}>
                Post
            </Button>
          </CardBody>
        </Card>
    )
};