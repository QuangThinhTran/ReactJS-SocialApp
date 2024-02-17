import { Outlet } from "react-router-dom"
import NavBar from "../components/molecules/NavBar"
import Section from "../components/origanism/Section"
import Header from "../components/template/Header/Header"
import useResize from "../common/hooks/useResize"
import { CONSTANTS } from "../common/constants"

const LayoutPage = () => {
    const { width } = useResize()
    if (width == CONSTANTS.SCREEN_MOBILE || width <= CONSTANTS.SCREEN_TABLET) {
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
