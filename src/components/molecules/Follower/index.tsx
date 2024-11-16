import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import style from './index.module.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../common/hooks/useAuth';
import { Link } from 'react-router-dom';

interface IFollower {
  id: string;
  name: string;
  email: string;
}

const Follower: React.FC<IFollower> = ({ name, email }) => {
  const [followed, setFollowed] = useState<boolean>(false);
  const { token } = useAuth();

  const handleFollow = async () => {
    await axios.get(`http://localhost:3000/pivot/follower/${email}`);
    setFollowed(true);
  };

  const handleUnfollow = async () => {
    await axios.get(`http://localhost:3000/pivot/unfollow/${email}`);
    setFollowed(false);
  };

  useEffect(() => {
    const checkFollow = async () => {
      const response = await axios.get(`http://localhost:3000/pivot/check-follow/${email}`);
      const data = response.data.data;
      setFollowed(data);
    };

    checkFollow();
  }, [email]);

  return (
    <div className={style['follower']}>
      <div className={style['follower--user']}>
        <a href="#" className="h6">{name}</a>
        <p>
          {email}
        {/* <Link to={'/profile/' + email}>{email}</Link> */}
        </p>
      </div>
      {token === null ? null : followed ? (
        <div className={style['icon']}><FontAwesomeIcon icon={faCheck} onClick={handleUnfollow} /></div>
      ) : (
        <div className={style['icon']}><FontAwesomeIcon icon={faPlus} onClick={handleFollow} /></div>
      )}
    </div>
  );
};

export default Follower;
