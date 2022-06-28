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
                <hr className={styles.seperate_line}/>

            </div>
            <div>
                <WrknChart />
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste error sequi eius vel possimus asperiores magni, itaque harum, voluptatum inventore fuga blanditiis beatae qui, fugit velit deleniti. Quisquam, quos?
            Esse, eaque accusamus? Magni exercitationem nam debitis sit. Blanditiis incidunt reprehenderit sit quasi ipsam enim facilis eius vitae voluptatem. Ex, itaque! Magni autem, odio libero exercitationem commodi delectus quidem cumque.
            Harum iusto voluptas incidunt repellendus voluptatibus veritatis rerum laudantium molestiae, placeat ullam recusandae temporibus debitis, distinctio id nostrum aliquid odio magni reiciendis iste dolore dolores. Consequatur maiores delectus suscipit vitae.
            Incidunt earum corporis ipsam. Earum dolor explicabo libero, labore maiores magnam expedita ipsam repellendus consectetur praesentium voluptates temporibus officiis, aut eligendi illum incidunt? Nihil fuga cumque quia assumenda eum eveniet?
            Quae quam quo saepe aliquam, ipsam optio quidem dolor expedita enim cum autem, sequi repudiandae, quis ab soluta fugit similique repellendus. Odio nemo dolore suscipit cupiditate autem quae modi voluptate?
            Est aliquid eaque temporibus dolorum? Eveniet at nisi ab veritatis non minus! Laborum dicta molestias dolores consectetur voluptates voluptatibus aliquam officia excepturi vitae reiciendis, quibusdam blanditiis. Laborum veritatis perferendis non!
            Minus, dolor sed! Id debitis error repellendus minus quas laborum dignissimos temporibus vitae veritatis aut voluptatibus corrupti, blanditiis molestiae, sint nostrum tempora distinctio nesciunt placeat aperiam. Vero iure libero blanditiis?
            Inventore sunt adipisci deleniti maxime laudantium sit qui placeat mollitia ea corrupti soluta rerum ipsa pariatur molestiae, optio dolores quas similique eius quaerat vel vero ducimus. Provident assumenda quasi error!
            Delectus, ullam inventore tempora officiis error magni eum alias exercitationem? Dignissimos eos corporis eaque optio dolorum velit numquam provident voluptates, placeat, incidunt deserunt beatae sapiente eveniet culpa accusamus harum sint.
            Excepturi quisquam, repellat quae voluptate facilis, ab commodi expedita dicta voluptates tempore similique veritatis? In, magnam eos? Debitis tempore corrupti molestiae dignissimos voluptatum autem eligendi eius cupiditate, incidunt, a doloremque.
            <PageButtom />
        </div>
    );
};

export default Wakron;