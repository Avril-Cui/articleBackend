import Header from "../Header/Header"
import PageButtom from "../PageButtom/PageButtom";
import styles from "./Layout.module.css"

const Layout = ( {children} ) => {
    return(
        <div>
            <Header />
            { children }  
            <PageButtom/>
        </div>
    )
}

export default Layout;