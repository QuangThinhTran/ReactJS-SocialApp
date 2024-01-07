import NavBar from "../components/molecules/NavBar"
import Section from "../components/origanism/Section"
import Header from "../components/template/Header/Header"
import Profile from "../components/template/Profile/Profile"

const ProfilePage = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div className='main_container'>
                    <NavBar />
                    <Profile />
                    <Section />
                </div>
            </div>
        </>
    )
}

export default ProfilePage
