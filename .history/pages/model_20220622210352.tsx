import React from "react";
import styles from "../styles/model/model.module.css";
import TermsSection from "../components/terminology/terms_section";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Model({ posts }: Props) {
  return (
    <div>
      <p className={styles.title}>Useful Models For Financial Analysis</p>
      <div className={styles.style_description}>
        <p className={styles.description}>
          Apply financial concepts and theories in investment decisions through Excel or programming
          algorithms.
        </p>
      </div>

      <TermsSection
        section_num="Section Seven"
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
              post.categories != null && post.categories._ref == "e242b86d-7cea-49b1-aeb9-312d45b3d319" ?
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
};

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

