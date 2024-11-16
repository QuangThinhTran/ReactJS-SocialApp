import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Account:React.FC<IAccount> = ({...props}) => {

    const [ followers, setFollowers ] = useState<number>(0)

    useEffect(() => {
        const fetchFollowers = async () => {
            const response = await axios.get(`http://localhost:3000/pivot/count-followers/${props.username}`)
            const data = response.data.data
            setFollowers(data)
        }

        fetchFollowers()
    }, [followers])

    return (
        <>
            <div className={style['account_item']}>
                <div className={style['account_header']}>
                    <img src="/icon/avatar.svg" alt="" />
                    <div className={style['account_header--item']}>
                        <Link to={'/profile/' + props.username}>{ props.name }</Link>
                        <div className={style['account_header--followers']}>
                            <FontAwesomeIcon icon={faUser} />
                            <h5>{followers} Followers</h5>
                        </div>
                    </div>
                </div>
                <div className={style['account_footer']}>
                    <button>
                        Follow
                    </button>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Account
