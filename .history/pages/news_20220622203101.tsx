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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nihil reiciendis magni quaerat laborum assumenda, autem modi numquam sed, atque dicta enim delectus. Molestiae maxime laudantium ut error illum soluta!
      Voluptas autem, ullam sunt veritatis, tempora, amet eum minima fuga magnam doloremque possimus deserunt qui nisi voluptatum exercitationem ab eius iste architecto ex? Beatae ut dignissimos fugit cupiditate doloremque commodi.
      Facere dolor delectus enim ullam libero, blanditiis error dolores? Ratione at nulla mollitia accusamus autem, eligendi perspiciatis. Ab, unde. Quidem expedita quisquam maiores doloribus quis hic sint eius omnis impedit!
      Odit sapiente quo at eum sed hic ducimus laboriosam ea nostrum ratione, repellat amet beatae, aliquid dolorum facilis laborum. Similique veniam harum, natus assumenda perspiciatis quis tenetur nemo numquam quos?
      Porro nesciunt aliquid eligendi necessitatibus odit distinctio! Praesentium necessitatibus quaerat tenetur vel minima et. Ratione rem possimus adipisci rerum fugiat dolores! Quibusdam dolorum, fugiat velit asperiores assumenda minus earum doloremque.
      Nobis a dicta perspiciatis expedita aut mollitia accusamus perferendis blanditiis officiis. Molestiae debitis obcaecati quasi explicabo, quo alias quis totam. Sit libero, quam nihil quidem reprehenderit suscipit deleniti dolorem harum?
      Ratione perspiciatis qui voluptatibus molestiae obcaecati ab aperiam quas autem ut molestias, quam explicabo aliquam, minima nesciunt natus consequatur quod est, fugiat a at. Sint consectetur aliquid consequuntur maxime natus.
      Recusandae nostrum est, laudantium odio officiis nisi eum nulla obcaecati eos qui porro amet vel totam magni quasi neque quidem quas aspernatur! Fugiat quo dolor, facere deleniti sed odit cupiditate?
      Quisquam, quia! Modi maxime quae sed amet, laudantium hic neque exercitationem. Consectetur, itaque esse molestiae nam voluptatibus laboriosam accusantium debitis cupiditate earum repudiandae eos impedit architecto dolorum alias, minima atque.
      Sunt assumenda nemo reprehenderit ab repudiandae. Nihil temporibus distinctio odio magnam ducimus, eligendi iusto, debitis labore eum provident ea sapiente veritatis maiores. Velit laboriosam adipisci ullam eius illum voluptates dolorum.
    
    
    
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
