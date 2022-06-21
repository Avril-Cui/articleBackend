import styles from "./simulator.module.css";

const Simulator = () => {
  return (
    <div>
      <div className={styles.container} style={{marginTop:100}}>
        <div className={styles.slogan_container}>
          <p className={styles.title}>Aspect Trading Game</p>
          <div className={styles.text_container}>
            <p className={styles.intro}>
              Novel Finance game to explore interesting companies and exciting
              trading environments!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container} style={{marginTop:15}}>
        <div className={styles.announce_container}>
          <div className={styles.text_container}>
            <p className={styles.announcement}>
              Important News: The METE virus had reached{" "}
              <span>5,251 total cases</span> worldwide (data collected from
              07/01/2022).
            </p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Simulator;
