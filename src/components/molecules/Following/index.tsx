import { USER } from "../../../common/enums/route";
import { useAuth } from "../../../common/hooks/useAuth";
import useFetch from "../../../common/hooks/useFetch";
import Follower from "../Follower"
import style from './index.module.scss'

const Following = () => {
    const { username } = useAuth();
    const { data, error } = useFetch(USER.GET + '?username=' + username);

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
