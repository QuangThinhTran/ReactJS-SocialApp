import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShowContext } from '../../../common/BaseProvider';

const Bars = () => {
  const bars = useContext(ShowContext)

  return (
    <div className={style['bars_container']}>
      <a href="/login" className="nav-link">Login</a>
      <a href="/register" className="nav-link">Register</a>
      <FontAwesomeIcon icon={faXmark} style={{ color: '#fff' }} onClick={() => bars.handleShow()} />
    </div>
  )
}

export default Bars
