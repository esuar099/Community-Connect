import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from "reactstrap";
import styles from "./CCNav.module.scss";

export function CCNav() {
  const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);
  const toogleBurgerNav = () => setIsBurgerNavOpen(!isBurgerNavOpen);

  return (
    <div>
      <div className={styles.ccNavBar}>
        <button className={styles.navButton} onClick={toogleBurgerNav}>Burger</button>
        <ul
          className={
            isBurgerNavOpen
              ? `${styles.navLinks} ${styles.showNavLinks}`
              : `${styles.navLinks}`
          }
        >
          <li className={styles.navItem} href="#">Home</li>
          <li className={styles.navItem} href="#">About us</li>
          <li className={styles.navItem} href="#">Contact</li>
        </ul>
      </div>
      {/*<Navbar color="dark" light expand="md">
        <NavbarBrand>
          <Link to="/">Community Connect</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/guides">Guides</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/trends">Trends</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/news">news</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink>
            <Link to="/profile">Profile</Link>
          </NavLink>
        </Collapse>
        </Navbar> */}
    </div>
  );
}

export default CCNav;
