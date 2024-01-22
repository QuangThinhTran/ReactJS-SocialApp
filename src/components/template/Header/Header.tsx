import style from './index.module.scss';

const Header = () => {
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
