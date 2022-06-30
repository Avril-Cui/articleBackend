import styles from "../styles/terminology/terms.module.css";
import TermsSection from "../components/terminology/terms_section";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Terminology({ posts }: Props) {
  console.log(posts);
  return (
    <div style={{marginBottom: 400}}>
      <p className={styles.title}>Dictionary For Financial Terms</p>
      <div className={styles.search_cont}>
        <div className={styles.search_container}>
          <input type="text" className={styles.search_box} />
          <p className={styles.search_text}>Search Terms</p>
        </div>
      </div>
      <TermsSection
        section_num="Section One"
        section_name="Accounting"
        intro_text="In this section, you will learn about the concepts and calculations related to a company’s financials. The section will start up with an introduction to the three financial statements. Then, detailed description will be demonstrated on each of the elements under the three statements. By the end of this section, you will form a basic understanding on the three financial statements and will be able to conduct financial analysis through Excel."
        start_link="/post/accounting-overview"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "6e871277-aa9f-4a1c-b947-97d92579d7ab" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
        </div>
      </div>


      <TermsSection
        section_num="Section Two"
        section_name="Valuation"
        intro_text="In corporate finance, valuation means the calculation of the value of a company. In other words, we determine whether a company is correctly valued by the market. However, it is also important to understand that overvaluation or undervaluation does not directly link to the performance of a stock in the future since valuations are often subject to many variables and external conditions. This chapter will introduce keys of valuation."
        start_link="/post/corporate-valuation-overview"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "8480489c-3a97-43b9-9c33-21d78304b12a" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
        </div>
      </div>



      <TermsSection
        section_num="Section Three"
        section_name="Trading"
        intro_text="Buy low, sell high. This is a typical strategy for many new investors. However, in the actual financial world, there are many more exciting and complex trading rules. Understanding how these rules work and how they can help us form various investment decisions are essential to increasing potential investment returns. Therefore, this section will discuss different trading strategies."
        start_link="/post/corporate-valuation-overview"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "9684989a-9b82-4f91-b012-fd375a389ef0" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
        </div>
      </div>



      <TermsSection
        section_num="Section Four"
        section_name="Portfolio"
        intro_text="In this chapter, many portfolio management-related topics will be introduced. A portfolio is a collection of financial assets. The goal by the end of this section is for all readers to understand the fundamental ideas of some of the most commonly seen portfolio management approaches and be able to construct our own portfolios according to the concepts. Therefore, several modeling strategies will also be introduced."
        start_link="/post/portfolio-management-overview"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "92150e2c-d600-4c64-8995-5f754c479391" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
        </div>
      </div>




      <TermsSection
        section_num="Section Five"
        section_name="De-Fi"
        intro_text="Decentralized finance is a novel version of the financial system. A decade after Bitcoin was first introduced, many new applications of De-Fi were deployed. In the section, we will first walk through some fundamental knowledge on decentralization and blockchain technologies. Then, interesting applications of De-Fi will be introduced."
        start_link="/post/decentralization"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "aa97ff9e-1c13-4f34-9359-03d50bbe5dee" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
        </div>
      </div>





      <TermsSection
        section_num="Section Six"
        section_name="ESG"
        intro_text="Environmental, social, governance = ESG. This keyword has grown increasing popularity in recent years. Many investors, including professional fund managers, started to include ESG as a part of their investment strategy. On the one hand, ESG is a measurement of 'justice.' On the other hand, ESG also gives an indication of a company's risk. Check out this section if you are interested in ESG investment!"
        start_link="/post/why-is-esg-important"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "5d65abaa-003b-464d-82bf-a438c3b5d0a2" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
        </div>
      </div>




      <TermsSection
        section_num="Section Five"
        section_name="OTHER"
        intro_text="This section will contain the miscellaneous topics in finance. Some of the covered topics include commonly used qualitative framework and introduction to the ESG analysis. These topics are small but are either popular or essential in finance, therefore, it is important to understand these concepts and incorporate them in our financial analysis. In the future, it is possible that these topics will form their own categories."
        start_link="/post/swot"
      />
      <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "2fa03938-7680-4329-8fd8-25684c6fbad1" ?
              (<Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                    <div>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                    <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>):null
            ))}
          </div>
        </div>
      </div>
      </div>


    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
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