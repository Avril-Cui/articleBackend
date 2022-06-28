import WrknChart from "../../components/company/comp_chart";
import styles from "../../styles/simulator/company.module.css";
import stock_valuation from "../../image/stock_valuation.png"
import Image from "next/image";
import WrknDayChart from "../../components/company/wrknDayChart";
import CompHeader from "../../components/company/comp_header"
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";


interface Props {
  posts: [Post];
}
export default function Wakron({ posts }: Props) {

  return (
    <div className={styles.container}>
      <CompHeader />
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
      {posts.map((post) => (
              post.categories._ref == "c523a11c-4a72-4328-a43a-d3b94dd60a8b" ?
              (<Link key={post._id} href={`/simulator_news/${post.slug.current}`}>
                <div>
                  <img
                      className={styles.img_comp}
                      src={urlFor(post.mainImage).url()!}
                      alt=""
                  />
                  <p>{post.author.name}        {new Date(post._createdAt).toLocaleString()}</p>
                </div>
{/* 
                  <div className={styles.text_cont_comp}>
                  <p className={styles.section_title_comp}>{post.title}</p>
                    <div className={styles.post_author_comp} style={{marginTop:-60}}>
                        <p className={styles.post_detail_comp}>
                          Author: {" "}
                          <span>
                            {post.author.name}
                          </span>
                        <p className={styles.post_detail}>
                        Published at{" "}
                          {new Date(post._createdAt).toLocaleString()}
                        </p>
                        </p>
                        <img
                      className={styles.author_pic_comp}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                      </div>
                      <p className={styles.section_text_comp}>{post.description}</p>
                    
                  </div> */}
                  
              </Link>):null
            ))}
      </div>      
    </div>
  );
};


export const getServerSideProps = async () => {
  const query = `*[_type == "simulator_news"]{
    _id,
    title,
  
    author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
    categories[0]
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};