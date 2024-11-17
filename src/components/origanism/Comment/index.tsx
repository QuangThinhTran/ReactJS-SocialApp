import { useEffect, useState } from 'react'
import style from './index.module.scss'
import axios from 'axios'
import useFetch from '../../../common/hooks/useFetch'
import moment from 'moment'

const Comment:React.FC<IComment> = ({...props}) => {

  const { data, error } = useFetch(`comment/detail/${props.id}`);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <hr />
      <div className={style['comment_container']}>
        <div className={style['comment_header']}>
          <div className={style['comment_header--infor']}>
            <img src="/icon/avatar.svg" alt="" />
            <a href="" className='h6'>{data.user.name}</a>
          </div>
            <p>{moment(data.createdAt).format("DD-MM-YYYY")}</p>            
        </div>
        <div className={style['comment_content']}>
          {data.comment}
        </div>
      </div>
    </>
  )
}

export default Comment
