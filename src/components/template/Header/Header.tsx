import { useScreenMobile, useScreenTablet } from '../../../utils/ScreenResponsive';
import style from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const mobile = useScreenMobile()
  const tablet = useScreenTablet()

  if (mobile.screen || tablet.screen) {
    <header>
      <div className={style['container']}>
        <a href="/" className={style['navbar-brand']}>Ideas</a>
        <div className={style['header-container']}>
          <FontAwesomeIcon icon={faBars} style={{ background: '#fff' }} />
        </div>
      </div>
    </header>
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
