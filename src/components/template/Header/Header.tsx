import style from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Bars from '../../origanism/Bars';
import { useContext } from 'react';
import { ShowContext } from '../../../common/providers/BaseProvider';
import useResize from '../../../common/hooks/useResize';
import { CONSTANTS } from '../../../common/constants';

const Header = () => {
  const { width } = useResize()

  const bars = useContext(ShowContext)

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
          <a href="/login" className="nav-link">Login</a>
          <a href="/register" className="nav-link">Register</a>
        </div>
      </div>
    </header>
  )
}

export default Header
