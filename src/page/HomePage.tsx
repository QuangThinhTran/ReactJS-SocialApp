import NavBar from '../components/molecules/NavBar'
import Home from '../components/origanism/Home'
import Section from '../components/origanism/Section'
import Header from '../components/template/Header/Header'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className='main_container'>
          <NavBar />
          <Home />
          <Section />
        </div>
      </div>
    </>
  )
}

export default HomePage
