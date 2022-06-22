import Header from "../Header/Header"
import PageButtom from "../PageButtom/PageButtom";

const Layout = ( {children} ) => {
    return(
        <div>
            <Header />
            { children }
            <div className={styles.grey_container}>
            
            <PageButtom/>
        </div>
    )
}

export default Layout;