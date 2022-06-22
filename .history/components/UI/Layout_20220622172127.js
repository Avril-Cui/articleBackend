import Header from "../Header/Header"
import PageButtom from "../PageButtom/PageButtom";

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