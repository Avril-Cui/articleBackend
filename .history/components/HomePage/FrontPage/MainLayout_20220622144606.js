import SearchBar from "./SearchBar";
import picture from "../../../image/test_pic.jpg"
import model from "../../../image/model.png"
import simulator from "../../../image/simulator.jpg"
import styles from "./MainLayout.module.css";
import Link from "next/link";
import Image from "next/image";
import Letter_Logo from "../../../image/logo.png"


const MainLayout = () => {

  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.colored_container}>
        <div className="px-10 space-y-5">
          <h1 className={styles.slogan}>
          {/* "text-6xl max-w-xl font-serif" */}
            <span className={styles.aspect}>
              ASPECT,
            </span>{" "}
            an interactive website to learn financial knowledge.
          </h1>
          <h2 className={styles.explaination}>
            Learn financial terms, explore latest news, gain trading experiences.
          </h2>
        </div>
        <div className={styles.logo_image}>
            <Image
              src={Letter_Logo}
              width={250}
              height={250}
            />
        </div>  
      </div>

      <SearchBar className={styles.search_bar} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        <Link href="/news">
          <div className={styles.img_border}>
            <div className={styles.img}><Image src={picture} alt="" height={375}/></div>
            <div className={styles.text_cont}>
              <div>
                <p className={styles.section_text}>Learn trending <span>NEWS</span> on the current financial markets.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/model">
          <div className={styles.img_border}>
          <div className={styles.img}><Image src={model} alt="" height={315}/></div>
            <div className={styles.text_cont}>
              <div>
                <p className={styles.section_text}>Commonly used <span>MODELS</span> for asset valuations and analyses.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/simulator">
          <div className={styles.img_border}>
          <div className={styles.img}><Image src={simulator} alt="" height={235}/></div>
            <div className={styles.text_cont}>
              <div>
                <p className={styles.section_text}>Interactive <span>STOCK SIMULATOR</span> for learning and entertainmet.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <Arrow/> */}
    </div>
    </div>
  );
};

export default MainLayout;
