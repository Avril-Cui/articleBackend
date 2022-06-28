import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import Link from "next/link";
import styles from "./comp_news.module.css"

interface Props {
    posts: [Post];
  }

export default function CompNews({ posts }: Props) {
    return(
        <div>
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
    );
};

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