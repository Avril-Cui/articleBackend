import WrknChart from "../../components/company/comp_chart"
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css"
import PageButtom from "../../components/PageButtom/PageButtom";

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
                <div className={styles.buttons}>
                    <div>
                        <button className={styles.watch_list}>
                            <p><span>&#9734;</span> Watchlist</p>
                        </button>
                        
                    </div>
                    <div>
                        <button className={styles.trade_button}>
                            <p>💰  Trade This Stock   √</p>
                        </button>
                    </div>
                </div>

            </div>
            <hr className={styles.seperate_line}/>
            <div className={styles.price_chart}>
                <WrknChart />
            </div>

            <div>
                <p>Ask and Bid Price</p>
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



            
            <div className={styles.lorem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At reiciendis sequi earum quos optio debitis! Quae, quo earum, dolor minima nihil deserunt consequatur repellat accusamus modi voluptas maiores. Placeat, ratione.
            Exercitationem sit molestiae officia nemo explicabo, eum, qui quam aliquam non commodi hic, dolor unde libero repellendus neque in labore possimus. Consequatur eos harum fugiat rem natus voluptas voluptate amet!
            Velit exercitationem atque sint inventore ex cum fugit rerum, ullam veniam alias eos aliquam, accusamus omnis? Natus aliquam id, ullam asperiores, ea nam amet eaque assumenda praesentium, aliquid maxime accusantium?</div>
        </div>
    );
};

export default Wakron;