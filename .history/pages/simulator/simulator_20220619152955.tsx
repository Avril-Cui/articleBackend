import styles from "./simulator.module.css";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import Image from "next/image";
import virus1 from "../image/virus1.png"

interface Props {
  posts: [Post];
}

export default function Simulator({ posts }: Props) {
  return (
    <div>
      <div className={styles.container} style={{ marginTop: 100 }} data-closable>
        <button className="close-button" aria-label="Close alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className={styles.slogan_container}>
        {/* <p className={styles.not_show} aria-hidden="true" aria-label="Close alert" data-close>&times;</p> */}
        <div style={{marginTop:-50}}>
        <div className={styles.virus1}>
          <Image
              src={virus1}
              width={150}
              height={140}
            />
        </div>
        <div className={styles.no_img_slogan}>
          <p className={styles.title}>Aspect Trading Game</p>
          <div className={styles.intro_center}>
            <p className={styles.intro}>
              Novel Finance game to explore interesting companies and exciting
              trading environments!
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.container} style={{ marginTop: 15 }}>
        <div className={styles.announce_container}>
          <div className={styles.text_container}>
            <p className={styles.announcement}>
              Important News: The METE virus had reached{" "}
              <span>5,251 total cases</span> worldwide (data collected from
              07/01/2022).
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.news_section}>
                
      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div className={styles.article_container}>
            {posts.map((post) =>
              post.categories._ref == "c00e1f5a-f49b-4969-b23f-5e750c7fa22d" ? (
                <Link
                  key={post._id}
                  href={`/simulator_news/${post.slug.current}`}
                >
                  <div className={styles.img_border}>
                    <div className={styles.text_cont}>
                      <p className={styles.section_title}>{post.title}</p>
                      <div style={{marginTop: 50}}>
                        <div className={styles.post_author}>
                        <p className={styles.post_detail}>
                          Author: {" "}
                          <span>
                            {post.author.name}
                          </span>
                        <p className={styles.post_detail}>
                        Published at{" "}
                          {new Date(post._createdAt).toLocaleString()}
                        </p>
                        </p>
                        </div>
                        <img
                      className={styles.author_pic}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                      </div>
                      <p className={styles.section_text}>{post.description}</p>
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className={styles.sep_line}/>
      <p className={styles.comp_news}>Discover Company News</p>



      <div className={styles.scroll_comp}>
            {posts.map((post) => (
              post.categories._ref == "c523a11c-4a72-4328-a43a-d3b94dd60a8b" ?
              (<Link key={post._id} href={`/simulator_news/${post.slug.current}`}>
                <div className={styles.img_border_comp}>
                  <div className={styles.text_cont_comp}>
                  <p className={styles.section_title_comp}>{post.title}</p>
                    <div className={styles.post_author_comp} style={{marginTop:-60}}>
                        <p className={styles.post_detail_comp}>
                          Author: {" "}
                          <span>
                            {post.author.name}
                          </span>
                        <p className={styles.post_detail}>
                        Published at{" "}
                          {new Date(post._createdAt).toLocaleString()}
                        </p>
                        </p>
                        <img
                      className={styles.author_pic_comp}
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                      </div>
                      <p className={styles.section_text_comp}>{post.description}</p>
                    
                  </div>
                  <img
                    className={styles.img_comp}
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                </div>
              </Link>):null
            ))}
      </div>
      </div>


    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "simulator_news"]{
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
