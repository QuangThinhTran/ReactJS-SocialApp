import { Outlet } from "react-router-dom"
import NavBar from "../components/molecules/NavBar"
import Section from "../components/origanism/Section"
import Header from "../components/template/Header/Header"
import { useScreenMobile, useScreenTablet } from "../utils/ScreenResponsive"

const LayoutPage = () => {
    const mobile = useScreenMobile()
    const tablet = useScreenTablet()

    if (mobile.screen || tablet.screen) {
        return (
            <>
                <Header />
                <div className="main">
                    <div className='main_container'>
                        <Outlet />
                    </div>
                </div>
            </>
        )
    }

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
