import NavBar from "../components/molecules/NavBar"
import Section from "../components/origanism/Section"
import Bookmark from "../components/template/Bookmark"
import Header from "../components/template/Header/Header"

const BookmarkPage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className='main_container'>
          <NavBar />
          <Bookmark />
          <Section />
        </div>
      </div>
    </>
  )
}

export default BookmarkPage
