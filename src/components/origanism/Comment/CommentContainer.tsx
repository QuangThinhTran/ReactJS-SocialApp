import style from './index.module.scss'

const CommentContainer = () => {
  return (
    <>
      <hr />
      <div className={style['comment_container']}>
        <div className={style['comment_header']}>
          <div className={style['comment_header--infor']}>
            <img src="/icon/avatar.svg" alt="" />
            <a href="" className='h6'>Mario</a>
          </div>
          <p>3-5-2023</p>
        </div>
        <div className={style['comment_content']}>
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </div>
    </>
  )
}

export default CommentContainer
