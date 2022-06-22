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
    
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea maxime unde ut quasi eos fugiat delectus aspernatur quod dolore incidunt omnis molestiae nobis, consectetur nihil itaque distinctio? Veritatis, laborum!
    Ullam dolorum, aliquid ex similique autem, dolor quisquam eius provident totam pariatur maxime id? Corporis, magnam. Nemo quaerat doloremque fuga sed aspernatur dolore necessitatibus, exercitationem neque voluptatibus expedita optio totam?
    Error repellat obcaecati placeat, voluptates quam architecto fuga et. Ullam modi et alias possimus, exercitationem rem soluta dolorum delectus saepe quam? Totam recusandae officia neque laudantium ratione, amet nobis similique.
    Perferendis molestias cupiditate, dolore fugiat incidunt, ipsa pariatur nisi, rem consectetur nam laboriosam quaerat similique! Praesentium suscipit culpa nesciunt, vero itaque recusandae, accusamus fugit provident necessitatibus qui veritatis. Praesentium, nisi.
    Consequuntur exercitationem aspernatur reiciendis excepturi molestiae sit perferendis alias consectetur, error ullam dolore pariatur temporibus quia, iusto nisi qui! Sapiente a hic dolores magni quisquam ipsa repellendus ea quam! Molestiae.
    Suscipit culpa et neque! Soluta aliquam quasi hic asperiores et enim odit! Hic vel quasi cum maiores inventore corrupti accusamus excepturi nesciunt, culpa quaerat commodi adipisci, fuga repellendus ab necessitatibus.
    Corporis tenetur repellat laudantium ratione ut aliquam maxime natus dolorem eos voluptatem odio libero expedita consectetur quos enim eligendi rem ullam amet consequuntur pariatur nobis, corrupti fugit perspiciatis explicabo? Laboriosam?
    Optio quas dolore similique ipsum? Aspernatur, tenetur expedita. Corrupti eligendi sint dolorum nesciunt ratione vitae doloribus numquam ullam, laborum modi pariatur. Asperiores neque aut quia nesciunt necessitatibus commodi iusto excepturi.
    Dolor beatae amet maxime ipsum eligendi odio eum voluptates tempore debitis recusandae expedita provident dolorem consequuntur laborum aliquam voluptatem tenetur quas dolores, ratione labore asperiores! Amet fuga explicabo saepe ab?
    Nulla at harum aspernatur odio ipsam molestiae, placeat tempora voluptatem officiis corrupti vitae in quis quasi iste? Veniam architecto minus facilis deserunt placeat doloremque quaerat? Adipisci temporibus quidem illo commodi!
    
    
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
