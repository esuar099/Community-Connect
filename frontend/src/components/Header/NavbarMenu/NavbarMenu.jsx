import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input  } from "reactstrap";
import { Create, Login, loginHook } from "../";
import axios from "axios";
import styles from "./NavbarMenu.module.scss";
import { useRouter } from "next/router";

export function NavbarMenu() {
  const router = useRouter();

  const [isLoggedIn, setLogin] = useState();
  

  console.log("home page");

  useEffect(() => {
    console.log("NavBar useeffect");
    if (localStorage.getItem("user") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  function logout() {
    console.log(
      "LOGOUT FUNCTION: " + axios.defaults.headers.common.Authorization
    );
    axios
      .get("user/auth/logout/", axios.defaults.headers.common.Authorization)
      .then((response) => {
        localStorage.clear();
        delete axios.defaults.headers.common["Authorization"];
        router.reload("/");
        setLogin(false);
      })
      .catch((error) => {
        console.log(error);
        delete axios.defaults.headers.common["Authorization"];
        localStorage.clear();
        router.reload("/");
        setLogin(false);
      });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isRegister, setIsRegister] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  const closeBtn = (modalToggle) => {
    return (
      <div className={styles.exit} onClick={modalToggle}>
        &times;
      </div>
    );
  };

  const isNavLinkActive = (path) => {
    return router.pathname === path;
  }

  return (
    <div className={styles.navMenuContainer} style={{justifyContent:"center"}}>
      {/* logo */}
      <a href="/">
        <img
          className={styles.logo}
          src="/assets/CommunityConnect_Logo.png"
          height={"100%"}
          width={"auto"}
          alt="logo"
          layout="fixed"
        />
      </a>

      {/* nav */}
      <div className={styles.navLinksContainer}>
        <a href="/about" className={isNavLinkActive("/about") ? styles.activeNavLink : styles.navLink}>About</a>
        <a href="/marketplace" className={isNavLinkActive("/marketplace") ? styles.activeNavLink : styles.navLink}>Marketplace</a>
        <a href="/news" className={isNavLinkActive("/news") ? styles.activeNavLink : styles.navLink}>News</a>
        <a href="/discuss" className={isNavLinkActive("/discuss") ? styles.activeNavLink : styles.navLink}>Forums</a>
        <a href="/carbon" className={isNavLinkActive("/carbon") ? styles.activeNavLink : styles.navLink}>Carbon Footprint</a>
      </div>

      {/* user login */}
      <div className={`${styles.loginBtn}`}>
        <Image
          src="/assets/profile.png"
          height={"70"}
          width={"120"}
          alt="logo"
          layout="fixed"
        />
        <div className={styles.accountActns}>
          {isLoggedIn == false ? (
            <Link href="/login">
              <p className={styles.loginLnk}>Log In</p>
            </Link>
          ) : (
            <Link href="/">
              <p className={styles.loginLnk} onClick={logout}>
                Log Out
              </p>
            </Link>
          )}
        </div>
      </div>
      {/* <Button className={styles.actionButton} onClick={toggleRegister}>
          Register
        </Button> */}

      {/* Login Modal */}
      <Modal isOpen={isModalOpen} toggle={toggleModal} className={styles.modal}>
        <ModalHeader
          toggle={toggleModal}
          className="modal-header"
          close={closeBtn(toggleModal)}
        >
          Sign Up
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className={styles.formGroup}>
              <Label for="exampleEmail">Email/Username:</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Username or email"
                onChange={(event) =>
                  setLoginState({ ...loginState, username: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup className={styles.formGroup}>
              <Label for="examplePassword">Password:</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                onChange={(event) =>
                  setLoginState({ ...loginState, password: event.target.value })
                }
              />
            </FormGroup>
          </Form>

          <Link href="/password/forgot">
            <a className={styles.forgotLink} onClick={toggleModal}>
              Forgot password?
            </a>
          </Link>
        </ModalBody>
        <div className="modal-footer">
          <Button className={`${styles.actionButton} ${styles.registerBtn}`}>
            Login
          </Button>
          <Button
            className={`${styles.actionButton} ${styles.registerBtn}`}
            onClick={toggleRegister}
          >
            Create Account
          </Button>
        </div>
      </Modal>

      {/* Create Account Modal */}
      <Modal isOpen={isRegister} toggle={toggleRegister}>
        <ModalHeader
          toggle={toggleRegister}
          className="modal-header"
          close={closeBtn(toggleRegister)}
        >
          Create Account
        </ModalHeader>
        <ModalBody>
          <Create />
        </ModalBody>
      </Modal>
    </div>
  );
}
