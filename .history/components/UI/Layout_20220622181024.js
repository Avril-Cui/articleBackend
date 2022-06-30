import Header from "../Header/Header"
import PageButtom from "../PageButtom/PageButtom";
import styles from "./Layout.module.css";

const Layout = ( {children} ) => {
    return(
        <div className={styles.layout}>
            <div>
                <Header />
                { children }
            </div>  
        </div>
    )
}

export default Layout;