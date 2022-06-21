import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";
import HomePage from "../components/HomePage/HomePage"
import PageButtom from "../components/PageButtom/PageButtom"



interface Props{
  posts: [Post];
}

export default function Home ({ posts }: Props) {
  // console.log(posts)
  return (
    
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Aspect - Learn Financial Knowledge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />

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
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
