import WrknChart from "../../components/company/comp_chart"
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css"
const Wakron = () => {
    const WAIT_TIME = 3000;
    const [price, setPrice] = useState(null)

    useEffect(() => {
      const data = setInterval(() => {
        fetch('/api/getPrice')
        .then((res) => res.json())
        .then((result_value) => {
          setPrice(result_value)
        })
  
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [price]); 


    return(
        <div className={styles.container}>
            <div className={styles.top_container}>
                <div className={styles.comp_logo}><p>W</p></div>
                <p className={styles.comp_name}>Wakron, Inc. (WRKN)</p>
                <p className={styles.stock_price}>{price}</p>
                {/* <p>{price_change}</p> */}
                <button>&#9734; Watchlist</button>
                <button>💰  Trade This Stock   √</button>
            </div>
            <div>
                <WrknChart />
            </div>
        </div>
    );
};

export default Wakron;