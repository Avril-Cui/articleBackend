import WrknChart from "../../components/company/comp_chart";
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css";
import stock_valuation from "../../image/stock_valuation.png"
import Image from "next/image";
import WrknDayChart from "../../components/company/wrknDayChart";

const Wakron = () => {
  const WAIT_TIME = 3000;
  const [price, setPrice] = useState("0.00");
  const [change, setChange] = useState("0.00");

  // useEffect(() => {
  //   const data = setInterval(() => {
  //     fetch("/api/getPrice")
  //       .then((res) => res.json())
  //       .then((result_data) => {
  //         setPrice(result_data);
  //       });
  //   }, WAIT_TIME);
  //   return () => clearInterval(data);
  // }, [price]);

  // useEffect(() => {
  //   const data = setInterval(() => {
  //     fetch("/api/getChange")
  //       .then((res) => res.json())
  //       .then((result_data) => {
  //         setChange(result_data);
  //       });
  //   }, WAIT_TIME);
  //   return () => clearInterval(data);
  // }, [change]);

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
        <div className={styles.dimension_container}>
            <p className={styles.dimension_text}>Dimension Chart</p>
            <Image src={stock_valuation} width="300px" height="300px" />
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
      <div className={styles.day_chart}>
        <WrknDayChart />
      </div>

      <div className={styles.chat_box}>
        <p className={styles.section_title} style={{marginLeft: 20}}>Chat Box</p>
        <p className={styles.chat_open}>Feature Will Open Soon!</p>
      </div>

      <div className={styles.stats_container}>
        <p className={styles.section_title}>Key Statistics</p>
        <div>
        <p className={styles.stats_title}>Valuation</p>
        <div className={styles.stats_type}>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
        </div>
        <div className={styles.stats_data}>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>0.777</p>
        </div>
        </div>
       
        <div>
        <p className={styles.stats_title}>Valuation</p>
        <div className={styles.stats_type}>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
        </div>
        <div className={styles.stats_data}>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>0.777</p>
        </div>
        </div>

        <div style={{marginLeft: 300, marginTop: -520}}>
        <p className={styles.stats_title}>Valuation</p>
        <div className={styles.stats_type}>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
        </div>
        <div className={styles.stats_data}>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>0.777</p>
        </div>
        </div>

        <div style={{marginLeft: 300}}>
        <p className={styles.stats_title}>Valuation</p>
        <div className={styles.stats_type}>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
          <p>Price to Book (P/B)</p>
          <p>Enterprise Value)</p>
          <p>Price to Earning (P/E)</p>
        </div>
        <div className={styles.stats_data}>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>1.587</p>
          <p>2.999</p>
          <p>0.777</p>
        </div>
        </div>
      </div>

      <div>
        News
      </div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est hic ad sed possimus consequuntur quibusdam rem sint, eligendi beatae ratione laborum nihil? Alias animi ipsam culpa molestiae! Doloribus, nulla aut?
      Ipsum iste qui unde iusto id ut hic repellendus quas, eos odio facilis possimus. Inventore illo eaque corporis facilis ex corrupti atque eligendi! Odit consequatur ullam nostrum reprehenderit rerum inventore!
      Doloribus quae incidunt in est non facilis eligendi nostrum esse blanditiis quibusdam omnis expedita ratione qui optio consequuntur rem dolorem sit culpa porro labore aliquam asperiores, eum quas? Cumque, ipsam!
      In fugiat illo maxime reprehenderit fugit expedita dolor vitae laudantium dolorem sapiente veritatis animi, corporis ipsum quod. Voluptatibus, aliquam, ad commodi itaque eius fugiat laudantium natus ab accusamus tenetur voluptate!
      Nisi eum voluptatum repellendus consectetur rerum pariatur reprehenderit. Dignissimos beatae facilis impedit exercitationem ad consequatur accusamus alias voluptatibus adipisci? Laborum facere iste debitis blanditiis consectetur a autem beatae perferendis doloribus.
      Repellat dignissimos, nam cupiditate aperiam amet minus recusandae quo aliquam quibusdam odit in soluta veritatis laboriosam itaque magni dolorem eum enim. Temporibus inventore vero saepe corrupti reprehenderit voluptatibus consequuntur sunt.
      Earum, repellat officia? Voluptate nesciunt laborum mollitia qui, vel animi obcaecati iste odit. Tempore quasi ex, ducimus molestiae labore sit vel corporis id accusamus repellendus commodi tenetur temporibus nihil doloremque?
      Itaque aspernatur, vero est possimus rerum quis nesciunt nostrum in repudiandae sit quam mollitia nobis modi voluptatibus consequatur voluptate animi voluptas ea facilis aut tempore, saepe dolores quos? Quos, sunt.
      Qui ratione esse aperiam possimus consequatur voluptatem quos, omnis fugit nihil quas, corrupti ducimus deserunt, quam perferendis velit! Id accusantium amet quisquam a, ipsum blanditiis quos ex cumque quia asperiores.
      Dolorem, quae! Facilis magni dolor veritatis voluptatum accusamus enim dolorum dolore ad fuga consequatur libero voluptatibus deleniti laboriosam, perferendis aut, ipsam alias, suscipit quisquam accusantium beatae et amet cum quo?</div>
      
    </div>
  );
};

export default Wakron;
