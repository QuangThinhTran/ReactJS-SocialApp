import CommentContainer from '../Comment'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Ticket from '../../molecules/Ticket';
import FormComment from '../../atom/Form/FormComment';
import Images from '../../atom/Silder/Images';
import DateTime from '../../atom/DateTime';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HTTP_STATUS } from '../../../common/constants';
import { useAuth } from '../../../common/hooks/useAuth';

const Blog: React.FC<IBlog> = ({...props}) => {

  const [blog, setBlog ] = useState<IBlog | null>(null)
  const [show, setShow] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(false)
  const [liked, setLiked] = useState<number>(0)
  const [likes, setLikes] = useState<number>(0)
  const { username } = useAuth(); 
  
  const showTicket = () => {
    setShow(!show)
  }

  const iconRef = useRef<SVGSVGElement>(null);

  const handleLike = async () => {
      try {
        if (!like) {
          const reponse = await axios.get(`http://localhost:3000/pivot/like-blog/${props.id}`)
          const data = reponse.data.data
          setLikes(data)
          setLiked(data)
        } else {
          const reponse = await axios.get(`http://localhost:3000/pivot/unlike-blog/${props.id}`)
          const data = reponse.data.data
          setLiked(data)
          setLikes(data)
        }
      } catch (error : any) {
        if (error.response.status === HTTP_STATUS.UNAUTHORIZED) {
          alert('You need to login to like this blog')
          
        }
        console.error('Error during registration:', error);
      }
  }

  useEffect(() => {

    const fetchBlog = async () => {
      const response = await axios.get(`http://localhost:3000/blog/${props.slug}`);
      const data = response.data.data;
      console.log(data);
      setBlog(data);
    }

    const checkLike = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pivot/check-like/${props.id}`);
        const data = response.data.data;
        setLike(data);
      } catch (error: any) {
        if (error.response.status != HTTP_STATUS.UNAUTHORIZED) {
          console.error('Error during check-like:', error);
        }
      }
    }

    const fetchLike = async () => {
      const response = await axios.get(`http://localhost:3000/pivot/count-likes/${props.id}`);
      const data = response.data.data;
      setLikes(data);
    }

    fetchBlog();
    checkLike();
    fetchLike();
  }, [likes])

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
            <Link to={"/profile/" + blog?.name } className='h5'>{blog?.name}</Link>
          </div>
          {
            username == blog?.users.username ? null : <FontAwesomeIcon icon={faBars} onClick={handleFontAwesomeIconClick} className={style['icon']} />
          }
           
          {
            show ? <Ticket blog={blog?.id} username={blog?.users.username} key={blog?.id}/> : null
          }
        </div>
        <div className={style['blog_container']}>
          {blog?.content}
        </div>
        <Images path={blog?.images as IPath[] | undefined} />
        <div className={style['blog_attributte']}>
          <div className={style['blog_attributte--item']} onClick={() => handleLike()}>
            {
              like ? (<FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />) : (<FontAwesomeIcon icon={faHeartRegular} />)
            }
            {likes}
          </div>
          <div className={style['blog_attributte--item']}>
            <DateTime datetime={blog?.createdAt}/>
          </div>
        </div>
        <div className={style['blog_footer']}>
          {blog?.id !== undefined && <FormComment rows={1} id={blog?.id}/>}
        </div>
        <CommentContainer />
        <CommentContainer />
      </div>
    </>
  )
}

export default Blog
