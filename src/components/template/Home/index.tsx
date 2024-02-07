import Form from '../../atom/Form/Form';
import Blog from '../../origanism/Blog';
import Container from '../../origanism/Container';
import style from './index.module.scss';
import useFetch from '../../../common/hooks/useFetch';

type IBlog = {
  id: number,
  content: string,
  images: string,
  name: string
}

const Home = () => {
  // const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { data: blogs, error } = useFetch();

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(blogs)
  return (
    <Container>
      <div className={style['home_container--form']}>
        <h4>Share yours ideas</h4>
        <Form rows={3} />
      </div>
      {
        blogs?.data.blogs.map((blog: IBlog) => (
          <Blog {...blog} key={blog.id} />
        ))
      }
    </Container>
  )
}

export default Home
