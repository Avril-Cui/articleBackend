import React from "react";
import styles from "../styles/model/model.module.css";

const Model = () => {
  return (
    <div>
      <p className={styles.title}>Useful Models For Financial Analysis</p>
      <div>
        <p className={styles.description}>
          Apply financial concepts and theories through Excel or programming
          algorithms.
        </p>
      </div>
    </div>
  );
};

export default Model;
