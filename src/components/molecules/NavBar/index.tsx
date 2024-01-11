import { Link } from 'react-router-dom';
import style from './index.module.scss'

const NavBar = () => {
    return (
        <>
            <div className={style['nav_container']}>
                <div className={style['nav_content']}>
                    <Link to="/" className={style['nav-link']}>Home</Link>
                    <Link to="/bookmark" className={style['nav-link']}>Bookmark</Link>
                    <Link to="/people" className={style['nav-link']}>People</Link>
                </div>
                <Link to="/profile" className={style['nav_footer'] + ' nav-btn'}>View Profile </Link>
            </div>
        </>
    )
}

export default NavBar
