import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './index.module.scss'
import React from 'react';

interface IFollower {
  id: string,
  name: string,
  email: string
}

const Follower: React.FC<IFollower> = ({ name, email }) => {
  return (
    <div className={style['follower']}>
      <div className={style['follower--user']}>
        <a href="" className="h6">{name}</a>
        <p>{email}</p>
      </div>
      <a href=""><FontAwesomeIcon icon={faPlus} /></a>
    </div>
  )
}

export default Follower
