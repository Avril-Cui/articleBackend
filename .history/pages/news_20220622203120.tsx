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
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptatum rem aliquid dolorem quidem eligendi exercitationem est quaerat ex eos! Laboriosam error aliquam obcaecati ullam assumenda pariatur officia libero debitis.
    Esse animi odio error, tempore blanditiis perferendis consectetur obcaecati, vel cumque eveniet debitis, corrupti dolores dolorum atque inventore labore! Natus iste cupiditate minus quas culpa perspiciatis, recusandae asperiores porro optio!
    Officiis eveniet ipsum corrupti atque assumenda. Tempora, id eos ex quam voluptas delectus neque earum perferendis unde voluptates voluptate laboriosam eaque fugit deserunt at, quaerat debitis. Optio repudiandae quisquam necessitatibus.
    Et beatae ut velit in autem amet ad! Mollitia pariatur aperiam officiis adipisci vero debitis? Dicta laborum dolorem eos dolorum, natus culpa ducimus cumque ipsum reiciendis labore, minima dignissimos distinctio.
    Quaerat quis eum est sit. Doloribus quibusdam, inventore similique earum magni fuga commodi ad libero tempore quia voluptates expedita! Natus similique fugiat quis accusamus nostrum incidunt tenetur labore deleniti perferendis!
    Repudiandae laborum aperiam reiciendis ducimus sit ut earum necessitatibus? Nesciunt incidunt a optio! Quo harum perspiciatis, fugit quae repudiandae aliquid suscipit delectus cupiditate excepturi sunt, architecto maiores nostrum quis consectetur?
    Temporibus corporis ducimus illum placeat deserunt, cumque officia, dignissimos, eum quae laudantium velit! Dicta magnam doloribus officia eligendi. Libero earum vel aliquam fuga eum cupiditate repellat numquam dolor adipisci veniam.
    Optio illo velit saepe eos dolore laborum aliquam veritatis doloremque vero fugit. Unde culpa libero non esse dignissimos veritatis, dolor labore perspiciatis officia commodi quod ad, deserunt eligendi quia velit!
    Illum veniam hic aliquid et blanditiis? Tempora at distinctio non enim. Hic debitis corrupti quos recusandae sit excepturi, nostrum dolor voluptatum nobis dolore? Libero quasi repudiandae mollitia nobis ducimus in!
    Consequatur, laborum iste maxime facere sequi ipsa, dolorem magnam culpa obcaecati inventore sunt debitis quia minus amet deleniti sint? Corporis tempore blanditiis repellat ducimus qui expedita autem nobis at pariatur!
    
    
    
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
