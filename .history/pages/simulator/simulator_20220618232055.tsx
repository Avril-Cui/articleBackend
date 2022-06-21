import styles from "./simulator.module.css";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Props {
  posts: [Post];
}

const Simulator = () => {
  return (
    <div>
      <div className={styles.container} style={{marginTop:100}}>
        <div className={styles.slogan_container}>
          <p className={styles.title}>Aspect Trading Game</p>
          <div className={styles.text_container}>
            <p className={styles.intro}>
              Novel Finance game to explore interesting companies and exciting
              trading environments!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container} style={{marginTop:15}}>
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


      <div className={styles.scroll}>
        <div className={styles.term_sections_cont}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            style={{ width: 1060 }}
          >
            {posts.map((post) => (
              post.categories._ref == "6e871277-aa9f-4a1c-b947-97d92579d7ab" ?
              (<Link key={post._id} href={`/simulator_news/${post.slug.current}`}>
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
  );
};

export default Simulator;
