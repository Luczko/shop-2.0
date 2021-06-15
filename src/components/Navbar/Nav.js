import React from "react";
import styles from "./Nav.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Container from "../Container/Container";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.nav}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='Catalog'>Catalog</Link>
          </li>
          <li>
            <Link to='About'>About</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Nav;
