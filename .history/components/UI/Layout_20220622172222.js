import Header from "../Header/Header"
import Buttom from "../PageButtom/Buttom";

const Layout = ( {children} ) => {
    return(
        <div>
            <Header />
            { children }
            <Buttom/>
        </div>
    )
}

export default Layout;