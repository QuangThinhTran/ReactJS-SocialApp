import Header from '../components/template/Header/Header'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className='main_container'>
          <h1 style={{ fontFamily: 'Cabin Sketch, sans-serif' }}>404 NOT FOUND</h1>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
