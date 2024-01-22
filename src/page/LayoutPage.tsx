import { Outlet } from "react-router-dom"
import NavBar from "../components/molecules/NavBar"
import Section from "../components/origanism/Section"
import { useContext } from "react"
import { ScreenContext } from "../utils/BaseProvider"
import Header from "../components/template/Header/Header"

const LayoutPage = () => {
    const isReponsive = useContext(ScreenContext)
    return (
        <>
            <Header />
            <div className="main">
                <div className='main_container'>
                    {isReponsive.mobile || isReponsive.tablet ? null : <NavBar />}
                    <Outlet />
                    {isReponsive.mobile || isReponsive.tablet ? null : <Section />}
                </div>
            </div>
        </>
    )
}

export default LayoutPage
