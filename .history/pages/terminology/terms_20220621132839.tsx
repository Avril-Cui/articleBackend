import styles from "../../styles/terminology/terms.module.css";
import TermsSection from "../../components/terminology/terms_section";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Props {
  posts: [Post];
}

export default function Terminology({ posts }: Props) {
  console.log(posts);
  return (
    <div>
      <p className={styles.title}>Dictionary For Financial Terms !!</p>
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
      />
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


      <TermsSection
        section_num="Section Two"
        section_name="Valuation"
        intro_text="In corporate finance, valuation means the calculation of the value of a company. In other words, we determine whether a company is correctly valued by the market. However, it is also important to understand that overvaluation or undervaluation does not directly link to the performance of a stock in the future since valuations are often subject to many variables and external conditions. This chapter will introduce keys of valuation."
      />
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



      <TermsSection
        section_num="Section Three"
        section_name="Portfolio"
        intro_text="In this chapter, many portfolio management-related topics will be introduced. A portfolio is a collection of financial assets. The goal by the end of this section is for all readers to understand the fundamental ideas of some of the most commonly seen portfolio management approaches and be able to construct our own portfolios according to the concepts. Therefore, several modeling strategies will also be introduced."
      />
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


      <TermsSection
        section_num="Section Four"
        section_name="OTHER"
        intro_text="This section will contain the miscellaneous topics in finance. Some of the covered topics include commonly used qualitative framework and introduction to the ESG analysis. These topics are small but are either popular or essential in finance, therefore, it is important to understand these concepts and incorporate them in our financial analysis. In the future, it is possible that these topics will form their own categories."
      />
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
