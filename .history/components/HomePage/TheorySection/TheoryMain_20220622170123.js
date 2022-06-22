import SectionsLayout from "./SectionsLayout";
import Button from "../../../components/UI/Button";
import styles from "./TheoryMain.module.css"

const TheoryMain = () => {
    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 " style={{marginTop:60, marginLeft: 140, marginBottom:300}}>
            <p className={styles.slogan}>
                Apply Financial Concepts Through Advanced Models
            </p>
            <div className={styles.button}>
                <Button>
                    <p className={styles.button_text}>Learn Modeling Methods</p>
                </Button>
            </div>
            <div className={styles.sections}>
                <SectionsLayout />
            </div>
        </div>
    );
};

export default TheoryMain;