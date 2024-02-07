import { useScreenMobile, useScreenTablet } from '../../../common/ScreenResponsive';
import style from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Bars from '../../origanism/Bars';
import { useContext } from 'react';
import { ShowContext } from '../../../common/BaseProvider';

const Header = () => {
  const mobile = useScreenMobile()
  const tablet = useScreenTablet()
  const bars = useContext(ShowContext)

  if (mobile.screen || tablet.screen) {
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
