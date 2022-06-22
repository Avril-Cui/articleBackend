import Header from "../Header/Header"
import PageButtom from "../PageButtom/Buttom";

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