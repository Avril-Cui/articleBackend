import React from 'react'
import styles from "../styles/news/news.module.css"
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function News({ posts }: Props) {
  return (
    <div className={styles.news_page}>
      <p className={styles.title}>Market News</p>
      <p className={styles.description}>Keep updated through learning the most recent and important market-related news.</p>
    
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className={styles.img_border}>
                  <img
                    className={styles.img}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className={styles.text_cont}>
                      <p className={styles.section_title}>{post.title}</p>
                      <p className={styles.section_text}>{post.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
    
    lorem*10
    
    
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type == "news"]{
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
