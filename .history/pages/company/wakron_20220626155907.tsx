import WrknChart from "../../components/company/comp_chart"
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css"
const Wakron = () => {
    const WAIT_TIME = 3000;
    const [price, setPrice] = useState("0.00")
    const [change, setChange] = useState("0.00%")

    useEffect(() => {
      const data = setInterval(() => {
        fetch('/api/getPrice')
        .then((res) => res.json())
        .then((result_data) => {
            setPrice(result_data)
        })
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [price]); 

    useEffect(() => {
        const data = setInterval(() => {
          fetch('/api/getChange')
          .then((res) => res.json())
          .then((result_data) => {
              setChange(result_data)
          })
        }, WAIT_TIME);
        return () => clearInterval(data);
      }, [change]); 


    return(
        <div className={styles.container}>
            <div className={styles.top_container}>
                <div className={styles.comp_logo}><p>W</p></div>
                <p className={styles.comp_name}>Wakron, Inc. (WRKN)</p>
                <p className={styles.stock_price}>{price}</p>
                <p className={styles.price_change}>{change}%</p>
                <button className={styles.watch_list}>
                    <p><span>&#9734;</span> Watchlist</p>
                </button>
                <button className={styles.trade_button}>
                    <p>💰  Trade This Stock   √</p>
                </button>
            </div>
            <div>
                <WrknChart />
            </div>
        </div>
    );
};

export default Wakron;