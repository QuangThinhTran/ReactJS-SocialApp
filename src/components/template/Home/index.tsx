import Form from '../../atom/Form/Form';
import Blog from '../../origanism/Blog';
import Container from '../../origanism/Container';
import style from './index.module.scss';
import useFetch from '../../../common/hooks/useFetch';
import { BLOG } from '../../../common/enums/route';

const Home = () => {
  const { data, error } = useFetch(BLOG.GET);
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <div className={style['home_container--form']}>
        <h4>Share yours ideas</h4>
        <Form rows={3} />
      </div>
      {
        data
        ?.sort((a: IBlog, b: IBlog) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        })
        .map((blog: IBlog) => (
          <Blog {...blog} key={blog.id} name={blog.users.name} />
        ))
      }
    </Container>
  )
}

export default Home