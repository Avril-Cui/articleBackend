import React from "react";
import styles from "../../styles/news/news.module.css";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Props {
  posts: [Post];
}

export default function News({ posts }: Props) {
  console.log(posts)
  return (
    <div className={styles.news_page}>
      <p className={styles.title}>Market News</p>
      <div className={styles.style_description}>
        <p className={styles.description}>
          Keep updated through learning the most recent and important
          market-related news.
        </p>
      </div>

      <div className={styles.term_sections_cont}>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
          style={{ width: 1350 }}
        >
          {posts.map((post) => (
            <Link key={post._id} href={`/news/${post.slug.current}`}>
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
    </div>
  );
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




// import styles from "../../styles/simulator/company.module.css";
// import Link from "next/link";
// import { Post } from "../../typings";
// import { sanityClient, urlFor } from "../../sanity";



// interface Props {
//   posts: [Post];
// }
  
// export default function IndividualNews({ posts }: Props) {
//   console.log(posts)
//     return(
//         <div className={styles.news}>
//         {posts.map((post) => (
//               post.categories._ref == "c00e1f5a-f49b-4969-b23f-5e750c7fa22d" ?
//               (<Link key={post._id} href={`/simulator_news/${post.slug.current}`}>
//                 <div className={styles.news_container}>
//                   <img
//                       className={styles.img_comp}
//                       src={urlFor(post.mainImage).url()!}
//                       alt=""
//                   />
//                   <p className={styles.news_author}>{post.author.name}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{new Date(post._createdAt).toLocaleString()}</p>
//                   <p className={styles.news_title}>{post.title}</p>
//                   <p className={styles.news_decription}>{post.description}</p>
//                 </div>
                  
//               </Link>):null
//             ))}
//       </div>
//     );
// };


// export const getServerSideProps = async () => {
//   const query = `*[_type == "simulator_news"]{
//     _id,
//     title,
  
//     author -> {
//       name,
//       image
//   },
//     description,
//     mainImage,
//     slug,
//     categories[0]
//   }`;

//   const posts = await sanityClient.fetch(query);

//   return {
//     props: {
//       posts,
//     },
//   };
// };

