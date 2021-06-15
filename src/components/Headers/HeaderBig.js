import React from "react";
import styles from "./Header.module.css";

function HeaderBig({ children }) {
  return <h1 className={styles.header_big}>{children}</h1>;
}

export default HeaderBig;
