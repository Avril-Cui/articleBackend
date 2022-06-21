import styles from "./PageButtom.module.css";

const PageButtom = () => {
  return (
    <div>
      <div className={styles.grey_container}>
        <div className={styles.first_container}>
          <button className={styles.button}>
            <p className={styles.button_text}>Learn Terms</p>
          </button>
          <p className={styles.join_game}>Join Market Game &#x2192;</p>
        </div>
      </div>
      <div className={styles.green_container}>
        <div className={styles.contact_container}>
          <p className={styles.contact}>Contact:</p>
          <p className={styles.contact}>AvrilCui0717@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PageButtom;
