import Header from "../Header/Header"

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