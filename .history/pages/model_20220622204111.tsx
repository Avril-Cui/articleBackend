import React from 'react'
import styles from "../styles/model/model.module.css";


const Model = () => {
  return (
    <div>
      <p className={styles.title}>Useful Models For Financial Analysis/p>
      <div className={styles.search_cont}>
        <div className={styles.search_container}>
          <input type="text" className={styles.search_box} />
          <p className={styles.search_text}>Search Terms</p>
        </div>
      </div>
    </div>
  )
}

export default Model;