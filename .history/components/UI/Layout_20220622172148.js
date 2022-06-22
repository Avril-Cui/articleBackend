import Header from "../Header/Header"
import PageButtom from "../PageButtom/PageButtom";

const Layout = ( {children} ) => {
    return(
        <div>
            <Header />
            <PageButtom/>
            { children }

        </div>
    )
}

export default Layout;