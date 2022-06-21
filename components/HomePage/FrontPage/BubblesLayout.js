import Bubbles from "./Bubbles";
import styles from "./BubblesLayout.module.css"

const BubblesLayout = () => {
    const bubble_info = {
        WRKN: "+1.10%",
        SGO: "+2.40%",
        AST: "+3.35%",
        FSIN: "+2.90%",
        DSPN: "+1.09%",
        HHW: "+0.01%",
        };

  return (
    <ul className={styles.bubble_container}>
      <li style={{marginRight: '65%'}}>
        <Bubbles
          comp_name={Object.keys(bubble_info)[0]}
          return_rate={bubble_info[Object.keys(bubble_info)[0]]}
        />
        <Bubbles
          comp_name={Object.keys(bubble_info)[1]}
          return_rate={bubble_info[Object.keys(bubble_info)[1]]}
        />
        <Bubbles
          comp_name={Object.keys(bubble_info)[2]}
          return_rate={bubble_info[Object.keys(bubble_info)[2]]}
        />
      </li>
      <li>
        <Bubbles
          comp_name={Object.keys(bubble_info)[3]}
          return_rate={bubble_info[Object.keys(bubble_info)[3]]}
        />
        <Bubbles
          comp_name={Object.keys(bubble_info)[4]}
          return_rate={bubble_info[Object.keys(bubble_info)[4]]}
        />
        <Bubbles
          comp_name={Object.keys(bubble_info)[5]}
          return_rate={bubble_info[Object.keys(bubble_info)[5]]}
        />
      </li>
    </ul>
  );
};

export default BubblesLayout;
