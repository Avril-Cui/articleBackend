import Header from "../Header/Header"
import PageButtom from "../PageButtom/PageButtom";
import styles from "./Layout.module.css"

const Layout = ( {children} ) => {
    return(
        <div>
            <Header />
            { children }
            <div className={styles.grey_container}>
            
            </div>
            {/* <div className={styles.buttom}>
                <PageButtom/>
            </div> */}
        </div>
    )
}

export default Layout;