import { useEffect, useState } from "react";
import { SearchGroup, TrendsCard } from "../../components/Trends";
import { PaginateBtn } from "../../components/common";
import { useRouter } from 'next/router'
import { Form, FormGroup, Label, Input } from "reactstrap";
import styles from "./Login.module.scss";
import Link from "next/link";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import { route } from "next/dist/server/router";

export default function Login({ data }) {
  
  
  const router = useRouter()

  const [loginState, setLoginState] = useState({
    //this is correct
    //it says username but expected input is an email
    username: "",
    password: "",
  
  });

  const API_URL = "user/auth/login/";
  
  function loginUser () {  
    axios
      .post(API_URL, loginState)
      .then((response) => {
        
        if (response.data.username) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        
        const { token, user } = response.data;
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        localStorage.setItem('user', axios.defaults.headers.common.Authorization)
        //router.reload('/NavbarMenu');
        router.push('/');
        
        
      })
      .catch(error => console.log(error));;
      
     localStorage.setItem("TEST","ugh")
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
            onChange={(event) => setLoginState({ ...loginState, username: event.target.value})}
          />

        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <Label for="examplePassword">Password:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            onChange={(event) => setLoginState({ ...loginState, password: event.target.value})}
          />
        </FormGroup>
      </Form>

          <Link href="/password/forgot">
            <a className={styles.forgotLink} >
              Forgot password?
            </a>
          </Link>
        
        
          <Button
            className={`${styles.actionButton} ${styles.registerBtn}`}
            onClick={loginUser}
          >
            Login
          </Button>

          <Link href="/register">
          <Button
            className={`${styles.actionButton} ${styles.registerBtn}`}
           
          >
            Register
          </Button>
          </Link>
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
