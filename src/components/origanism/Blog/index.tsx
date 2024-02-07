import CommentContainer from '../Comment'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Ticket from '../../molecules/Ticket';
import FormComment from '../../atom/Form/FormComment';
import Images from '../../atom/Silder/Images';

type IBlog = {
  id: number,
  content: string,
  images: string,
  name: string
}

const Blog = ({...props}: IBlog) => {
  const [show, setShow] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(false)

  const showTicket = () => {
    setShow(!show)
  }

  const iconRef = useRef<SVGSVGElement>(null);

  const handleLike = () => {
    setLike(!like)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  const handleFontAwesomeIconClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <>
      <hr />
      <div className={style['blog']}>
        <div className={style['blog_header']}>
          <div className={style['blog_header--infor']}>
            <img src="/icon/avatar.svg" alt="" />
            <a href="" className='h5'>{ props.name }</a>
          </div>
          <FontAwesomeIcon icon={faBars} onClick={handleFontAwesomeIconClick}  className={style['icon']} />
          {
            show ? <Ticket /> : null
          }
        </div>
        <div className={style['blog_container']}>
          { props.content }
        </div>
        <Images path={props.images} />
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
