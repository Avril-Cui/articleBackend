import styles from "../styles/terminology/terms.module.css";
import TermsSection from "../components/terminology/terms_section";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Terminology({ posts }: Props) {
  return (
    <div style={{marginBottom: 20}}>
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
      <div className={styles.container} style={{ marginBottom: 100 }}>
        <div className={styles.scroll}>
          <div className={styles.term_sections_cont}>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
              style={{ width: 1060 }}
            >
              {posts.map((post) =>
                post.categories != null &&
                post.categories._ref ==
                  "6e871277-aa9f-4a1c-b947-97d92579d7ab" ? (
                  <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <div className={styles.img_border}>
                      <img
                        className={styles.img}
                        src={urlFor(post.mainImage).url()!}
                        alt=""
                      />
                      <div className={styles.text_cont}>
                        <div>
                          <p className={styles.section_title}>{post.title}</p>
                          <p className={styles.section_text}>
                            {post.description}
                          </p>
                        </div>
                        <img
                          className={styles.author_pic}
                          src={urlFor(post.author.image).url()!}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                ) : null
              )}
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
              post.categories != null &&
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

