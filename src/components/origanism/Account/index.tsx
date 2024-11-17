import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../common/hooks/useAuth';

const Account: React.FC<IAccount> = ({ ...props }) => {

    const [followers, setFollowers] = useState<number>(0)
    const [followed, setFollowed] = useState<boolean>(false);
    const { token } = useAuth();

    useEffect(() => {
        const fetchFollowers = async () => {
            const response = await axios.get(`http://localhost:3000/pivot/count-followers/${props.username}`)
            const data = response.data.data
            setFollowers(data)
        }

        const checkFollow = async () => {
            const response = await axios.get(`http://localhost:3000/pivot/check-follow/${props.email}`);
            const data = response.data.data;
            setFollowed(data);
        };

        fetchFollowers()
        checkFollow();

        const intervalId = setInterval(checkFollow, 1000);

        return () => clearInterval(intervalId);
    }, [followers])

    const handleFollow = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/pivot/follower/${props.email}`)
            const data = response.data.data
            setFollowers(data)
        } catch (error: any) {
            console.error('Error during registration:', error)
        }
    }

    const handleUnfollow = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/pivot/unfollow/${props.email}`)
            const data = response.data.data
            setFollowers(data)
        } catch (error: any) {
            console.error('Error during registration:', error)
        }
    }

    return (
        <>
            <div className={style['account_item']}>
                <div className={style['account_header']}>
                    <img src="/icon/avatar.svg" alt="" />
                    <div className={style['account_header--item']}>
                        <Link to={'/profile/' + props.username}>{props.name}</Link>
                        <div className={style['account_header--followers']}>
                            <FontAwesomeIcon icon={faUser} />
                            <h5>{followers} Followers</h5>
                        </div>
                    </div>
                </div>
                {
                    token === null ? null : !followed ? 
                    <div className={style['account_footer']} onClick={handleFollow}> <button>Follow</button> </div> :
                    <div className={style['account_footer_temp']} onClick={handleUnfollow}> <button>UnFollow</button> </div>
                }
            </div>
            <hr />
        </>
    )
}

export default Account
