import Form from '../../atom/Form/Form';
import Blog from '../../origanism/Blog';
import Container from '../../origanism/Container';
import style from './index.module.scss';
const Home = () => {
  return (
    <Container>
      <div className={style['home_container--form']}>
        <h4>Share yours ideas</h4>
        <Form rows={3} />
      </div>
      <Blog />
      <Blog />
    </Container>
  )
}

export default Home
