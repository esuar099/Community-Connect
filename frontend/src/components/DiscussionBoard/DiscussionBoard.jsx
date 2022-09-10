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
import { CgChevronDown } from "react-icons/cg";
import { useState, useEffect, setList } from "react";
import styles from "./DiscussionBoard.module.scss";
/* import DatePicker from "react-datepicker"; */
import { useRouter } from "next/router";
// temp
import threads from "../../example-data/ThreadData";
import axios from "axios";
// import { Modal } from "bootstrap";
//import getUserInfoForumsPage from "../../pages/api/UserFunctions.js";
import { TopicsCard } from "../DiscussionBoard/TopicsCard/TopicsCard";
import { DiscussionCard } from "../DiscussionBoard/DiscussionCard/DiscussionCard.jsx";
import { PostsCard } from "../DiscussionBoard/PostsCard/PostsCard.jsx";

export function DiscussionBoard() {
  const [name, setName] = useState("John Smith");
  /* const [startDate,setStartDate] = useState(new Date()); */
  const [createdDate, setCreatedDate] = useState("");
  const [post, setPost] = useState("Your discussion here...");
  const [reply, setComment] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDiscuss, setShowDiscuss] = useState(false);
  const [postArrayId, setID] = useState(0);
  const [replyArrayState, setReplyArrayState] = useState([]);
  const [city, setCity] = useState("Miami");
  const [postArray, setList] = useState([
    {
      id: 1,
      title: "Minimizing my carbon footprint",
      user: { first_name: "Jim", last_name: "Bob" },
      posted_on: "May 15, 2022 05:35:32",
    },
    {
      id: 2,
      title: "My first farmers market experience",
      user: { first_name: "Joe", last_name: "Smith" },
      posted_on: "June 15, 2022 05:35:32",
    },
    {
      id: 3,
      title: "Hurricane Preparation Tips",
      user: { first_name: "Mark", last_name: "Johnson" },
      posted_on: "June 15, 2022 05:35:32",
    },
    {
      id: 4,
      title: "My COVID-19 experience",
      user: { first_name: "Diana", last_name: "Sanchez" },
      posted_on: "June 15, 2022 05:35:32",
    },
  ]);

  const [topics, setTopics] = useState([
    {
      id: 1,
      label: "Pandemic",
      selected: false,
    },
    {
      id: 2,
      label: "Extreme Weather",
      selected: false,
    },
    {
      id: 3,
      label: "Rising Temperatures",
      selected: false,
    },
    {
      id: 4,
      label: "Sea Level Rise",
      selected: false,
    },
    {
      id: 5,
      label: "Coastal Ecosystems",
      selected: false,
    },
    {
      id: 6,
      label: "Energy Consumption",
      selected: false,
    },
    {
      id: 7,
      label: "Sustainable Materials",
      selected: false,
    },
    {
      id: 8,
      label: "Recycling/Upcycling",
      selected: false,
    },
    {
      id: 9,
      label: "Green Technology",
      selected: false,
    },
    {
      id: 10,
      label: "Citizen Science",
      selected: false,
    },
    {
      id: 11,
      label: "Community Engagement",
      selected: false,
    },
  ]);


  const router = useRouter();

  // todo: do something with the selected category..

  const toggle = () => setOpen((prevState) => !prevState);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeBtn = (modalToggle) => {
    return (
      <div className={styles.exit} onClick={modalToggle}>
        &times;
      </div>
    );
  };

  const handlePost = (e) => {
    setPost(e.target.value);
  };
  const commenthandler = (e) => {
    setComment(e.target.value);
  };

  const handleDate = (e) => {
    setCreatedDate(e.target.value);
  };

  const handleTopic = (e) => {
    setTopics(e.target.value);
  };

  const [replyState, setReplyState] = useState({
    text: "",
    user: 1,
    thread: "",
  });

  const [forumState, setForumState] = useState({
    title: "",
    description: "",

  });

  const [change, setChange] = useState(false);

  function getUserInfo() {
    console.log(
      "AT THE DISCUSSION BOARD MAAM" +
        axios.defaults.headers.common.Authorization
    );
  }

  // populate messages on the side
  /*
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    }
    console.log(axios.defaults.headers.common.Authorization);

    axios
      .get("forum/thread/", axios.defaults.headers.common.Authorization)
      .then((response) => {
        setList(response.data);
        console.log(postArray);
      })
      .catch(error => console.log(error));;
    //console.log(postArray);
    getUserInfo();
  }, [change]);
  */

  const onSubmit = () => {
    axios
      .post("forum/thread/", forumState)
      .then((response) => {
        console.log("successful post");
        setChange(!change);
        //router.reload();
      })
      .catch((error) => console.log(error));
  };

  const getComments = async (threadID) => {
    console.log("hitting get comments");
    await axios
      .get("forum/thread/" + threadID)
      .then((response) => {
        console.log("getting replies");

        console.log(response.data.user.first_name);
        setReplyArrayState(response.data);
      })
      .catch((error) => console.log(error));
  };

  const postReply = async () => {
    //const thread=threadIn
    console.log("its hitting it ");
    console.log({ text: reply, thread: postArrayId, user: 1 });
    await axios
      .post("forum/reply/", {
        text: reply,
        thread: postArrayId,
        user: 1,
      })
      .then((response) => {
        console.log("agh");
        setComment("");
        getComments(postArrayId);
      })
      .catch((error) => console.log(error));
  };

  const checkboxSelector = (e) => {
    if (topics[e - 1].selected === true) topics[e - 1].selected = true;
    else topics[e - 1].selected = false;
  };

  const itemSelected = async (e) => {
    await setID(e);
    //await getComments(e);

    if (showDiscuss === true) setShowDiscuss(false);
    else setShowDiscuss(true);
  };

  return (
    <div>
      <div className={styles.container}>
      
        <div className={styles.container}>
          
          <TopicsCard city={city} topics={topics} setTopicsHook={setTopics}/>

          {showDiscuss ?

            <CardGroup className={styles.CardGroupFormatting}>
              <Card className={styles.cardFormatting}>
                <CardBody>
                  <CardTitle tag="h2" className={styles.underlineTitle}>
                    {replyArrayState.title}
                  </CardTitle>
                  {/*console.log(replyArrayState)*/}
                  {/*console.log(replyArrayState.user)*/}
                  <CardSubtitle className={styles.threadDate}>
                    Posted by : {replyArrayState.user.first_name + " " + replyArrayState.user.last_name} on {new Date(replyArrayState.posted_on).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}
                  </CardSubtitle>
                  <div className={styles.threadWrapper}>
                    <CardText className={styles.threadDescription}>
                      {replyArrayState.description}
                    </CardText>

                    <CardText >
                      Comments:
                    </CardText>

                    <ListGroup flush className={styles.commentListGroup}>
                      {replyArrayState.replies.map((commentsArray) => {
                        return (

                          <ListGroupItem key={commentsArray.id} className={styles.commentListItem}>

                            <ListGroupItemText className={styles.threadDate}>
                              {commentsArray.user.first_name + " " + commentsArray.user.last_name} - {new Date(commentsArray.posted_on).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}  { }
                            </ListGroupItemText>
                            <ListGroupItemHeading className={styles.threadComment}>{commentsArray.text}</ListGroupItemHeading>


                          </ListGroupItem>

                        );
                      })
                      }
                    </ListGroup>

                  </div>

                  <div className={styles.commentContainer}>


                    <Form>
                      <FormGroup>
                        <Input name="reply-text" className={styles.inputComment} value={reply} onChange={(event) => setComment(event.target.value)} placeholder="Leave a comment..."  > </Input>
                      </FormGroup>
                    </Form>

                    <Button className={styles.postButton} onClick={//console.log(postArray[postArrayId - 1].id)
                      /*postReply.bind(replyArrayState.id)*/null
                    }>

                      Post
                    </Button>
                    <Button className={styles.postButton} onClick={() => itemSelected(postArrayId)}>
                      Back
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>

            :

            <CardGroup className="d-flex flex-column">
              {/*card for discussion posting*/}

              <DiscussionCard post={post}/>

            </CardGroup>}

          {showDiscuss ? null :
            <CardGroup className="d-flex flex-column">

              <PostsCard/>

            </CardGroup>}
        </div>

        <div className= {styles.underConstruction}>
          Under Construction
        </div>
      </div>
    </div>
    
  );
}

      /*
      <CardGroup className={styles.topicsCard}>

{/* Card for topics *///}
/*
<Card className={styles.cardFormatting}>
  <CardBody>
    <CardTitle className={styles.underlineTitle}>
      Your Community
    </CardTitle>
    <CardTitle className={styles.citySpacing}>
      {city}
    </CardTitle>
    <CardTitle className={styles.underlineTitle}>
      Select Topics
    </CardTitle>
      {topics.map((topicsArray) => 
          <CardText  className={styles.underline} key={topicsArray.id}>
            <Label className="d-flex justify-content-between">
              {topicsArray.topic}
              <input 
                className={styles.radio} 
                type="checkbox" 
                name="radio" 
                onClick={checkboxSelector(topicsArray.id)} defaultChecked={topicsArray.selected} 
              />
            </Label>
          </CardText>
        )}

  </CardBody>
</Card>
</CardGroup>
      */