import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css";
// import raw_data from "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json"

const CompHeader = ({ stock_price, stock_change }: any) => {
  const WAIT_TIME = 3000;
  const [price, setPrice] = useState("0.00");
  const [change, setChange] = useState("0.00");

  useEffect(() => {
    const data = setInterval(() => {
      setPrice(stock_price)
      setChange(stock_change)
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


export const getStockData = () =>{
  const WAIT_TIME = 3000;
  const [stock_price, setPrice] = useState("0.00");
  const [stock_change, setChange] = useState("0.00");

  useEffect(() => {
    let data_address = { "body":"/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json" }

    const data = setInterval(() => {
      fetch('/api/getPrice', {
        body: JSON.stringify(data_address),
        method: "POST",
      })
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [stock_price]); 

  useEffect(() => {
    const data = setInterval(() => {
      fetch('/api/getChange', {
        body: "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json",
      })
      .then((res) => res.json())
      .then((result_value) => {
        setChange(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [stock_change]); 

  return {
    stock_price,
    stock_change,
  };
}


