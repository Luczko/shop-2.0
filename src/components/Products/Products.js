import React from "react";
import styles from "./Products.module.css";

function Products({ children }) {
  return <div className={styles.products}>{children}</div>;
}

export default Products;
