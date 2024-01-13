import Form from '../../atom/Form/Form';
import Blog from '../Blog';
import './index.scss';
const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_container--form'>
        <h4>Share yours ideas</h4>
        <Form rows={3} />
      </div>
      <Blog />
      <Blog />
    </div>
  )
}

export default Home
