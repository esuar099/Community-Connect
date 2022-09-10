import { Form, FormGroup, Label, Input } from "reactstrap";
import {useState} from 'react';
import { Button} from "reactstrap";
import styles from "./Create.module.scss";

export function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleZip = (e) => {
    setZip(e.target.value);
    setSubmitted(false);
  }
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || zip === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };


  return (
    <>
      <Form className={styles.container}>
        <FormGroup className={styles.formGroup}>
          <Label for="newUser">Username:</Label>
          <Input onChange={handleName} type="text" name="user" id="newUser" />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="userEmail">E-mail:</Label>
          <Input onChange= {handleEmail} type="email" name="email" id="userEmail" />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="userZip">Zipcode:</Label>
          <Input onChange ={handleZip} type="text" name="zip" id="userZip" />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <Label for="userPass">Password:</Label>
          <Input onChange = {handlePassword} type="text" name="Password" id="userPass" />
        </FormGroup>
        <div className="modal-footer">
          <Button className={`${styles.actionButton} ${styles.registerBtn}`} onClick = {handleSubmit}>
            Register
          </Button>
          <Button
            className={`${styles.actionButton} ${styles.registerBtn}`}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
}
