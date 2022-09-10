import { useEffect, useState } from "react";
import { SearchGroup, TrendsCard } from "../../components/Trends";
import { PaginateBtn } from "../../components/common";
import { useRouter } from 'next/router'
import { Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import styles from "./Register.module.scss";
import Link from "next/link";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";

export default function Register({ data }) {
  
  
  const router = useRouter()

  const [registerState, setRegisterState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    gender:"",
    birthdate: "",
    address_1:"",
    address_2:"",
    postal_code:"",
    city:"",
    state:"",
    topics:[]
  });


  const API_URL = "user/auth/register/";
  function registerUser () {
    console.log("REGISTER")
    console.log(registerState.topics)
    axios
      .post("user/auth/register/", registerState)
      .then((response) => {
        
        if (response.data.username) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        
        const { token, user } = response.data;
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        router.push('/');
       
      })
      .catch(error => console.log(registerState));;
  };

  function handleMultiSelect (event) {
    let topicsSet= [];
    // topicsSet.add(event.target.value);
    // setRegisterState({ ...registerState, topics: topicsSet});
    // console.log(topicsSet)

    let topics = document.getElementsByName('topic');
    topics.forEach((topic) => {
        if (topic.checked) {
          topicsSet.push(topic.value);
        }
    })
    setRegisterState({ ...registerState, topics: topicsSet});    
  };

  return (
    <>
    
    <div className='LoginBox'>
     <Form>
        <FormGroup className={styles.formGroup}>
          <Label for="exampleEmail">Email:</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            onChange={(event) => setRegisterState({ ...registerState, email: event.target.value})}
          />
        </FormGroup>
        
      
        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Password:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            onChange={(event) => setRegisterState({ ...registerState, password: event.target.value})}
          />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">First Name </Label>
          <Input
            name="birthday"
            id="examplePassword"
            placeholder="First Name"
            onChange={(event) => setRegisterState({ ...registerState, first_name: event.target.value})}
          />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Last Name </Label>
          <Input
            name="birthday"
            id="examplePassword"
            placeholder="Last Name"
            onChange={(event) => setRegisterState({ ...registerState, last_name: event.target.value})}
          />
        </FormGroup>

        {/* <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Re-enter Password:</Label>
          <Input
            type="password"
            name="re-enter password"
            id="examplePassword"
            placeholder="Password"
            onChange={(event) => setLoginState({ ...registerState, password: event.target.value})}
          />
        </FormGroup> */}

        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Birthdate</Label>
          <Input
            type="date"
            name="birthday"
            id="examplePassword"
            placeholder="Password"
            onChange={(event) => setRegisterState({ ...registerState, birthdate: event.target.value})}
          />
        </FormGroup>
       <p>Gender</p>
        <FormGroup check style={{display: "flex", justifyContent:"space-evenly"}}>

            <Label check> 
      
              <input type="radio" value="female" name="gender" className={styles.checkboxRound} onChange={(event) => setRegisterState({ ...registerState, gender: event.target.value})}/>{' '}
              Female
            </Label>
            <Label check>
              <input type="radio" value="male" name="gender" className={styles.checkboxRound} onChange={(event) => setRegisterState({ ...registerState, gender: event.target.value})}/>{' '}
              Male
            </Label>
            <Label check>
              <input type="radio" value="non-binary" name="gender" className={styles.checkboxRound} onChange={(event) => setRegisterState({ ...registerState, gender: event.target.value})}/>{' '}
              Non-Binary
            </Label>
            <Label check>
              <input type="radio" value="other" name="gender" className={styles.checkboxRound} onChange={(event) => setRegisterState({ ...registerState, gender: event.target.value})}/>{' '}
              Other
            </Label>
          </FormGroup>
          
        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Address Line 1</Label>
          <Input
  
            name="birthday"
            id="examplePassword"
            placeholder="Address Line 1"
            onChange={(event) => setRegisterState({ ...registerState, address_1: event.target.value})}
          />
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Address Line 2</Label>
          <Input
  
            name="birthday"
            id="examplePassword"
            placeholder="Address Line 2"
            onChange={(event) => setRegisterState({ ...registerState, address_2: event.target.value})}
          />
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword"> Zip Code</Label>
          <Input
  
            name="birthday"
            id="examplePassword"
            placeholder="Zip Code"
            onChange={(event) => setRegisterState({ ...registerState, postal_code: event.target.value})}
          />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword"> City </Label>
          <Input
  
            name="birthday"
            id="examplePassword"
            placeholder="City"
            onChange={(event) => setRegisterState({ ...registerState, city : event.target.value})}
          />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">State</Label>
          <Input
  
            name="birthday"
            id="examplePassword"
            placeholder="Only two letter state abbreviations"
            onChange={(event) => setRegisterState({ ...registerState, state: event.target.value})}
          />
        </FormGroup>  
        <p>Topics</p>
        <FormGroup check style={{display: "flex", justifyContent:"space-evenly", flexDirection:"column"}} 
        
        onChange={(event) => handleMultiSelect(event)}
         >
            
            <Label check> 
              <input type="checkbox" name="topic" className={styles.checkboxRound} value="1"/>{' '}
              Pandemic
            </Label>
            <Label check>
              <input type="checkbox" name="topic" className={styles.checkboxRound} value="2" />{' '}
              Greenhouse Gases
            </Label>
            <Label check>
              <input type="checkbox" name="topic" className={styles.checkboxRound} value="3"/>{' '}
              Climate Change
            </Label>
            <Label check>
              <input type="checkbox" name="topic" className={styles.checkboxRound} value="4" />{' '}
              Extreme Events and Environment
            </Label>
            <Label check>
              <input type="checkbox" name="topic" className="checkbox-round" value="5"/>{' '}
              Energy and Environment
            </Label>
            <Label check>
              <input type="checkbox" name="topic" className="checkbox-round" value="6"/>{' '}
              Sustainability and Environment
            </Label>
          </FormGroup>
       
      </Form>

          <Link href="/password/forgot">
            <a className={styles.forgotLink} >
              Forgot password?
            </a>
          </Link>
        
        

          <Button
            className={`${styles.actionButton} ${styles.registerBtn}`}
            onClick={registerUser}
          >
            Create Account
          </Button>
          <Button
            className={`${styles.actionButton} ${styles.registerBtn}`}
            href="/login"
          >
            Login
          </Button>
    </div>
    </>

  );
}

// used for SSR data fetching
export async function getServerSideProps(context) {
  // const res = await fetch('api endpoint here');
  // const data = await res.json();

  const data = ""; // temp until full implementation of data fetching
  return {
    props: { data }, // will be passed to the page component as props
  };
}
