import Follower from "../Follower"
import style from './index.module.scss'

const Following = () => {
    return (
        <div className={style['following_container'] + ' card'}>
            <div className={style['following_title']}><h4>Following</h4></div>
            <div className={style['following_content']}>
                <Follower />
                <Follower />
            </div>
        </div>
    )
}

export default Following
