import CommentContainer from '../Comment'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Ticket from '../../molecules/Ticket';
import FormComment from '../../atom/Form/FormComment';
import Images from '../../atom/Silder/Images';

const Blog = () => {
  const [show, setShow] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(false)

  const showTicket = () => {
    setShow(!show)
  }

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <>
      <hr />
      <div className={style['blog']}>
        <div className={style['blog_header']}>
          <div className={style['blog_header--infor']}>
            <img src="/icon/avatar.svg" alt="" />
            <a href="" className='h5'>Mario</a>
          </div>
          <FontAwesomeIcon icon={faBars} onClick={() => showTicket()} className={style['icon']} />
          {
            show ? <Ticket /> : null
          }
        </div>
        <div className={style['blog_container']}>
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
        <Images path='image-1.jpg' />
        <div className={style['blog_attributte']}>
          <div className={style['blog_attributte--item']} onClick={() => handleLike()}>
            {
              like ? (<FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />) : (<FontAwesomeIcon icon={faHeartRegular} />)
            }
            120
          </div>
          <div className={style['blog_attributte--item']}>
            <FontAwesomeIcon icon={faClock} /> 3-5-2023
          </div>
        </div>
        <div className={style['blog_footer']}>
          <FormComment rows={1} />
        </div>
        <CommentContainer />
        <CommentContainer />
      </div>
    </>
  )
}

export default Blog
