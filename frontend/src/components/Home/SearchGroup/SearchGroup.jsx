import { SearchBar } from "../../common/SearchBar";
import styles from "./SearchGroup.module.scss";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import getUserInfo from "../../../pages/api/UserFunctions.js";

export const SearchGroup = () => {
  const [isLoggedIn, setLogin] = useState();
  const [change, setChange] = useState(false);
  const [City, setCity] = useState();
  const [topics, setTopics] = useState([]);


  const checkboxSelector = (e) => {
    if (topics[e - 1].selected === true)
      topics[e - 1].selected = true;
    else
      topics[e - 1].selected = false;
  }

  useEffect(() => {
    console.log("HOME USE EFFECT")
    const token = localStorage.getItem("user");
    console.log("HOMEUSEEFFECT "+token)
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    }
    console.log(axios.defaults.headers.common.Authorization)
    getUserInfo(setCity, setLogin, setTopics);
    //console.log(topics[3]);

    //const [change, setChange] = useState(false);
    // if (localStorage.getItem("user") !== null) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  }, [change]);


  if (isLoggedIn == false) {
    return (
      <>
        <div className='HomeBox'>
          <h6 className='HomeBoxHeading'>A Platform for Resilient + Sustainable Communities</h6>

          <div style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
            <Link href="/login"><button className='actionButton HomeLoginBtn' role="button">LOG IN</button></Link>
            <Link href="/register"><button className='actionButton HomeLoginBtn' role="button">Register</button></Link>
          </div>
          <h6 className='HomeBoxHeading'>Connect with your community today</h6>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px" }}>
            <div style={{ padding: "10px", justifyContent: "center", }}>
              <div style={{width:"100%",height:"56%"}}>
                <Image
                  className={styles.greenProducts}
                  src="/assets/CC Green Product Icons-08.png"
                  height={100}
                  width={160}
                  layout="responsive"
                />
              </div>
              <p>Green Products</p>
              <br></br>
              <p>Find Sustainable products for sale in your area</p>
            </div>
            <div style={{ padding: "10px", justifyContent: "center" }}>
              <div style={{width:"100%",height:"56%", alignContent:"center"}}>
                <Image
                  className={styles.Health}
                  src="/assets/CC Health Icon-08.png"
                  height={100}
                  width={160}
                />
              </div>
              <p>Health</p>
              <br></br>
              <p>Learn about common health issues in your community</p>
            </div>
            <div style={{ padding: "10px", justifyContent: "center" }}>
              <div style={{width:"100%",height:"56%",alignContent:"center", layout:"flex", justifyContent:"center", alignSelf: 'center' }}>
                <Image
                  className={styles.Community}
                  src="/assets/CC Your Community Icon-08.png"
                  height={100}
                  width={160}
              
          
                />
              </div>
              <p>Your Community</p>
              <br></br>
              <p>Read trending content in your area</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className='newsBox'>
          <p>Your City: {City}</p>
          <p>Additional Topics:  </p>

          <Form>
           
            {topics.map((topicsArray) => {
              return (
                <FormGroup check inline >
              <Label check style={{ paddingRight: "20px" }}>
                <input type="checkbox" name="radio1" className="checkboxRound" onClick={checkboxSelector(topicsArray.id)} defaultChecked={topicsArray.selected}/>
                {topicsArray.topic}
              </Label>
              
              </FormGroup>);
            })
            }
            
          </Form>

          <br></br>
          <Link href="/discuss">
            <button className='actionButton' role="button">Step 2: Visit the forum to engage in a conversation with your community</button>
          </Link>
        </div>

      </>

    );
  }
}
