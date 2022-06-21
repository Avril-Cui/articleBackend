import styles from "./Manu.module.css";
import Button from "../UI/Button";
import Link from "next/link";
import Dropdown from "./Dropdown";

// import News from "../../pages/News";
// import Simulator from "../../pages/Simulator";
// import Terms from "../../pages/Terminology/Terms";
// import Login from "../../pages/Login";
// import Model from "../../pages/Model";
// import Home from "../../pages/HomePage/Home";

const Manu = () => {
  const news_sections = {
    one: "Today's News",
    two: "Global Market",
    three: "Economics",
    four: "Technology",
  };
  const terms_sections = {
    one: "Accounting",
    two: "Valuation",
    three: "Portfolio",
    four: "De-Fi",
  };
  const model_sections = {
    one: "Excel",
    two: "Portfolio",
    three: "Black Scholes",
    four: "Technical",
  };
  const simulator_sections = {
    one: "Learn Company",
    two: "View News",
    three: "Join Game",
    four: "Trade",
  };

  return (
    <header className={styles.manu}>
      <Link href="/">
        <a className={styles.logo}>Logo</a>
      </Link>
      <div className={styles.sections}>
        <div>
          <Dropdown
            link={"/news"}
            content={news_sections}
            className={styles.drop}
          >
            <Link href="/news">
              <a className={styles.news}>News</a>
            </Link>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            link={"/terminology/terms"}
            content={terms_sections}
            className={styles.drop}
          >
            <Link href="/terminology/terms">
              <a>Terminology</a>
            </Link>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            link={"/model"}
            content={model_sections}
            className={styles.drop}
          >
            <Link href="/model">
              <a>Model</a>
            </Link>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            link={"/simulator/simulator"}
            content={simulator_sections}
            className={styles.drop}
          >
            <Link href="/simulator/simulator">
              <a>Simulator</a>
            </Link>
          </Dropdown>
        </div>
      </div>

      <Button>
        <p className={styles.style_but}>
          <Link className={styles.section} href="/login">
            Log In
          </Link>
        </p>
      </Button>
    </header>
  );
};

export default Manu;
