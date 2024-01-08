import { Outlet } from "react-router-dom"
import NavBar from "../components/molecules/NavBar"
import Section from "../components/origanism/Section"
import Header from "../components/template/Header/Header"

const LayoutPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div className='main_container'>
                    <NavBar />
                    <Outlet />
                    <Section />
                </div>
            </div>
        </>
    )
}

export default LayoutPage
