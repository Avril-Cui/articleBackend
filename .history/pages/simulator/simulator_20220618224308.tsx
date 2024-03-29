import styles from "./simulator.module.css";

const Simulator = () => {
  return (
    <div>
      <div className={styles.slogan}>
        <div className={styles.slogan_container}>
          <p className={styles.title}>Aspect Trading Game</p>
          <div className={styles.intro_container}>
            <p className={styles.intro}>
              Novel Finance game to explore interesting companies and exciting
              trading environments!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.announce_container}>
        <p className={styles.announcement}>
          Important News: The METE virus had reached 5,251 total cases worldwide
          (data collected from 07/01/2022).
        </p>
      </div>
    </div>
  );
};

export default Simulator;
