import React from "react";
import styles from "./Header.module.css";

function HeaderSmall({ children }) {
  return <h2 className={styles.header_small}>{children}</h2>;
}

export default HeaderSmall;
