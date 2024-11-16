import { USER } from "../../../common/enums/route";
import useFetch from "../../../common/hooks/useFetch";
import Follower from "../Follower"
import style from './index.module.scss'

const Following = () => {
    const { data, error } = useFetch(USER.GET);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={style['following_container'] + ' card'}>
            <div className={style['following_title']}><h4>Following</h4></div>
            <div className={style['following_content']}>
                {
                    data?.map((user: any) => (
                        <Follower key={user.id} {...user} />
                    ))
                }
            </div>
        </div>
    )
}

export default Following
