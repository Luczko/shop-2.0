import React from "react";
import styles from "./Product.module.css";

function Product({ image, name, amount }) {
  return (
    <div className={styles.product}>
      <img src={image} alt={name} />
      <p className={styles.price}>{amount}</p>
      <h3>{name}</h3>
    </div>
  );
}

export default Product;
