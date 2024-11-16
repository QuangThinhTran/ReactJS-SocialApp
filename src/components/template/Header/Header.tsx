import style from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Bars from '../../origanism/Bars';
import { useContext } from 'react';
import { ShowContext } from '../../../common/providers/BaseProvider';
import useResize from '../../../common/hooks/useResize';
import { CONSTANTS, HTTP_STATUS } from '../../../common/constants';
import { useAuth } from '../../../common/hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const { width } = useResize()
  const bars = useContext(ShowContext)
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await axios.post('http://localhost:3000/auth/logout', {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    if (data.status === HTTP_STATUS.OK) {
      auth.removeToken()
      navigate("/", { replace: true })
    }
    else {
      alert(data.message)
    }
  }

  if (width == CONSTANTS.SCREEN_MOBILE || width <= CONSTANTS.SCREEN_TABLET) {
    return (
      <header>
        <div className={style['container']}>
          <a href="/" className={style['navbar-brand']}>Ideas</a>
          <div className={style['header-container']}>
            <FontAwesomeIcon icon={faBars} style={{ background: '#fff' }} onClick={() => bars.handleShow()} />
          </div>
        </div>
        <div className={style['bars'] + ' ' + (bars.show ? style['open'] : 'hi')}>
          {bars.show ? <Bars /> : ''}
        </div>
      </header>
    )
  }

  return (
    <header>
      <div className={style['container']}>
        <a href="/" className={style['navbar-brand']}>Ideas</a>
        <div className={style['header-container']}>
          {!auth.token ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          ) : (
            <>
              <Link to={ "/profile/" + auth.username } className="nav-link">{auth.username}</Link>
              <a className="nav-link" onClick={handleLogout}>Logout</a>
            </>
          )}
        </div>
      </div>
    </header> 
  )
}

export default Header
