import WrknChart from "../../components/company/comp_chart";
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css";
import stock_valuation from "../../image/stock_valuation.png"
import Image from "next/image";

const Wakron = () => {
  const WAIT_TIME = 3000;
  const [price, setPrice] = useState("0.00");
  const [change, setChange] = useState("0.00");

  useEffect(() => {
    const data = setInterval(() => {
      fetch("/api/getPrice")
        .then((res) => res.json())
        .then((result_data) => {
          setPrice(result_data);
        });
    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [price]);

  useEffect(() => {
    const data = setInterval(() => {
      fetch("/api/getChange")
        .then((res) => res.json())
        .then((result_data) => {
          setChange(result_data);
        });
    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [change]);

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.comp_logo}>
          <p>W</p>
        </div>
        <p className={styles.comp_name}>Wakron, Inc. (WRKN)</p>
        <p className={styles.stock_price}>{price}</p>
        <p className={styles.price_change}>{change}%</p>
        <div className={styles.buttons}>
          <div>
            <button className={styles.watch_list}>
              <p>
                <span>&#9734;</span> Watchlist
              </p>
            </button>
          </div>
          <div>
            <button className={styles.trade_button}>
              <p>💰 Trade This Stock √</p>
            </button>
          </div>
        </div>
      </div>
      <hr className={styles.seperate_line} />
      <div className={styles.price_chart}>
        <p className={styles.price_text}>Price Chart</p>
        <div>
          <WrknChart />
        </div>
      </div>

      <div className={styles.table}>
        <p className={styles.ask_bid}>Ask and Bid Price</p>
        <p className={styles.update}>Function will be unlocked soon!</p>
        <table className={styles.ask_bid_table}>
          <tr>
            <th>Ask/Bid</th>
            <th>Price</th>
            <th>Number</th>
          </tr>
          <tr>
            <td>S#5</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>S#4</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>S#3</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>S#2</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>S#1</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <hr className={styles.seperate_table} />
          <tr>
            <td>B#1</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>B#2</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>B#3</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>B#4</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>B#5</td>
            <td>100.00</td>
            <td>1000</td>
          </tr>
        </table>
      </div>

      <div className={styles.trade_container}>
        <p className={styles.trade}>
          Trade Stock <span className={styles.update}>Opening soon.</span>
        </p>
        <div style={{ marginBottom: 20, marginTop: 10 }}>
          <div className={styles.trade_type}>
            <p>BUY</p>
          </div>
          <div>
            <p className={styles.trade_text}>Share</p>
            <div className={styles.trade_place} />
          </div>
          <div>
            <p className={styles.trade_text}>Price</p>
            <div className={styles.trade_place} />
          </div>
        </div>

        <div>
          <div className={styles.trade_type}>
            <p>SELL</p>
          </div>
          <div>
            <p className={styles.trade_text}>Share</p>
            <div className={styles.trade_place} />
          </div>
          <div>
            <p className={styles.trade_text}>Price</p>
            <div className={styles.trade_place} />
          </div>
        </div>

        <button className={styles.trade_stock_button}>
          <p>Enter Trade</p>
        </button>
      </div>

      <div className={styles.comp_overview}>
        <p className={styles.section_title}>Company Overview</p>
        <p className={styles.comp_description}>
          Wakron, Inc. (WRKN) is a technology company headquartered in
          California, United States. The company develops products for people to
          connect and socialize with friends, families, and partners. Wakron’s
          main product WaKO, a decentralized platform for users to chat in text,
          video calls, and groups, gained over 80 million monthly active users
          across the globe in 2070. Other products under Wakron include KonNect,
          a software for project and business management; Wakron Pay, a digital
          payment application. Starting in 2019, Wakron began expanding its
          business toward the gaming industry. Until 2022, it promoted over ten
          hype-game, gaining popularity among the players..
        </p>
        <div>
            <p className={styles.dimension_text}>Dimension Chart</p>
            <Image src={stock_valuation} width="350px" height="300px" />
        </div>
      </div>

      <div className={styles.lorem}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At reiciendis
        sequi earum quos optio debitis! Quae, quo earum, dolor minima nihil
        deserunt consequatur repellat accusamus modi voluptas maiores. Placeat,
        ratione. Exercitationem sit molestiae officia nemo explicabo, eum, qui
        quam aliquam non commodi hic, dolor unde libero repellendus neque in
        labore possimus. Consequatur eos harum fugiat rem natus voluptas
        voluptate amet! Velit exercitationem atque sint inventore ex cum fugit
        rerum, ullam veniam alias eos aliquam, accusamus omnis? Natus aliquam
        id, ullam asperiores, ea nam amet eaque assumenda praesentium, aliquid
        maxime accusantium?
      </div>
    </div>
  );
};

export default Wakron;
