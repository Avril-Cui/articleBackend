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
    </div>
  );
};

export default Simulator;
