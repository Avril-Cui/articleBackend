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
        section_name="Portfolio"
        intro_text="Portfolio management is an important topic. In this section, a simple but essential portfolio modelling method will be introduced. We will first walk through several related theories. Then, some fundamental Python skills required in building this model will be taught. By the end of this section, you will be able to construct a model that can help finding the efficient portfolio combinations."
        start_link="/post/swot"
      />
      <div className={styles.container}>
        <div className={styles.scroll}>
          <div className={styles.term_sections_cont}>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
              style={{ width: 1060 }}
            >
              {posts.map((post) =>
                post.categories != null &&
                post.categories._ref ==
                  "abc7e3c9-97a5-4ea7-9e0f-200a04849e30" ? (
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
    categories[1]
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

