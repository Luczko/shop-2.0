import React from "react";
import styles from "./ColumnLeft.module.css";
import ProductService from "../../Product.service";

function ColumnLeft(props) {
  let manufacturers = ProductService.getManufacturers();

  return (
    <div className={styles.column_left}>
      <div className={styles.filter}>
        <div className={styles.filter_header}>
          <h4>Search</h4>
          <span onClick={props.clear} className={styles.clear}>
            Clear
          </span>
        </div>
        <div>
          <input
            type='text'
            placeholder='search...'
            onChange={props.changeName}
            value={props.name}
          />
        </div>
        <h4>Manufacturer</h4>
        <div>
          {manufacturers.map((e) => {
            return (
              <div>
                <input
                  type='radio'
                  name='manufacturere'
                  id={e}
                  value={e}
                  checked={props.radio === e}
                  onChange={() => {
                    props.changeRadio(e);
                  }}
                />
                <label for={e}>{e}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColumnLeft;
