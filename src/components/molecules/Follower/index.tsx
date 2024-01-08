import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './index.module.scss'

const Follower = () => {
  return (
    <div className={style['follower']}>
      <div className={style['follower--user']}>
        <a href="" className="h6">Thinh</a>
        <p>@thinh</p>
      </div>
      <a href=""><FontAwesomeIcon icon={faPlus} /></a>
    </div>
  )
}

export default Follower
