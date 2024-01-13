import style from './index.module.scss'

const HeaderContainer = () => {
    return (
        <div className={style['header-container']}>
            <a href="/login" className="nav-link">Login</a>
            <a href="/register" className="nav-link">Register</a>
        </div>
    )
}

export default HeaderContainer
