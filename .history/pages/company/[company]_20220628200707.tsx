import WrknChart from "../../components/company/comp_chart";
import styles from "../../styles/simulator/company.module.css";
import stock_valuation from "../../image/stock_valuation.png"
import Image from "next/image";
import WrknDayChart from "../../components/company/wrknDayChart";
import CompHeader from "../../components/company/comp_header"
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

import wrkn_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/inner_day.json"
import sgo_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/sgo/inner_day.json"
import fsin_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/fsin/inner_day.json"
import jky_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/jky/inner_day.json"
import dsc_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/dsc/inner_day.json"
import hhw_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/hhw/inner_day.json"
import ast_inner from "/Users/xiaokeai/Desktop/aspect_website/price_info/ast/inner_day.json"


const companies = [
  {
    id: "wrkn",
    name: "Wakron, Inc. (WRKN)",
    overview: "Wakron, Inc. (WRKN) is a technology company headquartered in California, United States. The company develops products for people to connect and socialize with friends, families, and partners. Wakron’s main product WaKO, a decentralized platform for users to chat in text, video calls, and groups, gained over 80 million monthly active users across the globe in 2070. Other products under Wakron include KonNect, a software for project and business management; Wakron Pay, a digital payment application. Starting in 2019, Wakron began expanding its business toward the gaming industry. Until 2022, it promoted over ten hype-game, gaining popularity among the players..",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/day.json",
    inner_day_source: wrkn_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b"
  },
  {
    id: "hhw",
    name: "Hahawa & Co.",
    overview: "Hahawa & Co. (HHW) is an American chain of department stores founded in 1858 by Chinese immigrant Qing Hou. It became a division of the Philadelphia-based Federated Department Stores in 1995. As of 2021, Hahawa was the largest U.S. department store company by retail sales with 608 physical department stores, including ten flagship stores, 178 magnet stores, 250 core stores, 117 neighborhood stores, and 53 other stores. The company had 125,000 employees and earned annual revenue of $23.3 billion as of Dec. 2021.",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/hhw/day.json",
    inner_day_source: hhw_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/hhw/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/hhw/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b"
  },
  {
    id: "sgo",
    name: "Surgo Corporation (SGO)",
    overview: "Surgo (SGO) is a US-based biomedical company that focuses on three segments: Medical devices, pharmaceuticals, and Consumer Health. It is known for its leading technique in both traditional and novel medical areas. Specifically, Surgo has established its popularity among customers in the Consumer Health industry through its well-known products in body lotion and facial cleansers. In recent years, Surgo invested much of its R&D in the Medical Device and Pharmaceutical industry. Surgo successfully invented AlphaTech, BetaTech, GammaTech, and other advanced surgical technologies within five years. It is currently enlarging its biology lab to process its GeneNext project in the Pharmaceutical industry.",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/sgo/day.json",
    inner_day_source: sgo_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/sgo/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/sgo/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b"
  },
  {
    id: "fsin",
    name: "FlashIn, Inc. (FSIN)",
    overview: "FlashIn, Inc. (FSIN) is a fashion company based in France that designs and produces clothes, accessories, and sneakers across the world. By 2072, FlashIn had started more than 1,000 retail stores worldwide. The company mainly focuses on athletic apparel and streetwear, building a solid customer base among younger generations. Its production series Flash, Inside, and Light are now widely popular and soon became the symbol of pop culture.",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/fsin/day.json",
    inner_day_source: fsin_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/fsin/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/fsin/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b"
  },
  {
    id: "jky",
    name: "Jileky Investment, Inc. (JKY)",
    overview: "Jilepy Investment, Inc. provides financial services for clients across the world. It offers three major businesses: Corporate & Investment Bank (CIB), Commercial Banking (CB), and Asset & Wealth Management (AWM). The company provides services to fulfill various client needs, including investment and lending products, deposit, cash management, risk management solutions, mortgages, retirement products, etc.",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/jky/day.json",
    inner_day_source: jky_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_infojkyn/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/jky/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b",
  },
  {
    id: "ast",
    name: "Astral Company Limited (AST)",
    overview: "Astral Company Limited (AST) is a car manufacturer that designs and develops vehicles with new technologies. Astral is headquartered in Shanghai and has various business locations worldwide. Astral’s business operation focuses on three mainstream: automotive, electric vehicle, and batteries. Starting in 2010, the company continues to invest in its electric vehicle and batteries business segments, aiming to establish its leading position in the two areas. Electric vehicles Stellar 100 and Stellar 101 both achieved successful sales. The company is also continuously researching and developing lithium- and nickel batteries and Superchargers for electric cars.",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/ast/day.json",
    inner_day_source: ast_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/ast/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/ast/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b"
  },
  {
    id: "dsc",
    name: "Doshacom (DSC)",
    overview: "Doshacom is a leading provider of telecommunications, media, and technology services globally. The company offers wireless, wireline, satellite, and strategic data services, including Virtual Private Networks (VPN), Ethernet and broadband services. It is one of the biggest wireline and wireless providers in the US. While having the US supplying the majority of the company's revenue, Doshacom also reaches the Middle East and Asia through subsidiaries and joint ventures.",
    day_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/dsc/day.json",
    inner_day_source: dsc_inner,
    second_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/dsc/second.json",
    tick_source: "/Users/xiaokeai/Desktop/aspect_website/price_info/dsc/tick.json",
    news_type: "c523a11c-4a72-4328-a43a-d3b94dd60a8b"
  },
];



interface Props {
  posts: [Post];
}
export default function Wakron({ posts }: Props, props: any) {

  return (
    <div className={styles.container}>
      {companies.map((company) => (
        <div key={`${company.id}`}>
          <CompHeader />
          <div className={styles.price_chart}>
            <p className={styles.price_text}>Price Chart</p>
            <div>
              <WrknChart FileSource={company.inner_day_source}/>
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
            <p className={styles.comp_description}>{company.overview}</p>
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
            <WrknDayChart FileSource={company.tick_source}/>
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


          <div className={styles.news}>
            {posts.map((post) => (
                  post.categories._ref == `${company.news_type}` ?
                  (<Link key={post._id} href={`/simulator_news/${post.slug.current}`}>
                    <div className={styles.news_container}>
                      <img
                          className={styles.img_comp}
                          src={urlFor(post.mainImage).url()!}
                          alt=""
                      />
                      <p className={styles.news_author}>{post.author.name}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{new Date(post._createdAt).toLocaleString()}</p>
                      <p className={styles.news_title}>{post.title}</p>
                      <p className={styles.news_decription}>{post.description}</p>
                    </div>
                      
                  </Link>):null
                ))}
          </div>
        </div>
      ))}
            
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