import styles from "./terms_section.module.css"
import Button from "../UI/Button";
import Link from "next/link";


const TermsSection = (props:any) => {
    return(
        <div className={styles.terms_section}>
            <p className={styles.section_num}>{props.section_num}</p>
            <div className={styles.name_container}>
                <p className={styles.section_name}>"{props.section_name}"</p>
            </div>
            
            {/* insert state here later */} 
            {/* <div className={styles.img_container}>
                <Image src={props.img_source} alt="" height={200} width={320} className={styles.img}/>
            </div> */}
            <p className={styles.star}>&#9734;</p>
            <p className={styles.intro_text}>
                {props.intro_text}
                <div className={styles.button_container}>
                <Button>
                    {/* <Link href={props.start_link}>
                        <a className={styles.button_txt}>Simulator</a>
                    </Link> */}
                </Button>
                
            </div>
            </p>
        </div> 
    );
};

export default TermsSection;