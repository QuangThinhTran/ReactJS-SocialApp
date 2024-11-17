import { Link } from 'react-router-dom';
import style from './index.module.scss'
import { useAuth } from '../../../common/hooks/useAuth';

const NavBar = () => {
    const auth = useAuth()

    return (
        <>
            <div className={style['nav_container']}>
                <div className={style['nav_content']}>
                    <Link to="/" className={style['nav-link']}>Home</Link>
                    {/* <Link to="/bookmark" className={style['nav-link']}>Bookmark</Link> */}
                    <Link to="/people" className={style['nav-link']}>People</Link>
                </div>
                <Link to={"/profile/" + auth.username} className={style['nav_footer'] + ' nav-btn'}>View Profile </Link>
            </div>
        </>
    )
}

export default NavBar
