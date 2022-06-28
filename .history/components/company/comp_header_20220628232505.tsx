import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css";
import raw_data from "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json"

const CompHeader = (props: any) => {
  const WAIT_TIME = 3000;
  const [price, setPrice] = useState("0.00");
  const [change, setChange] = useState("0.00");

  useEffect(() => {
    const data = setInterval(() => {
      setPrice(props.stock_price)
      setChange(props.stock_change)
    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [price, change]); 
  
  return (
    <div>
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
    </div>
  );
};

export default CompHeader;