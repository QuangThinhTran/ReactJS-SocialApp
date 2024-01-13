import style from './index.module.scss'
import Search from '../../molecules/Search'
import Following from '../../molecules/Following'

const Section = () => {
  return (
    <div className={style['section']}>
      <Search />
      <Following />
    </div>
  )
}

export default Section
