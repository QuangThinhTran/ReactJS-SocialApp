import style from './index.module.scss'

const Search = () => {
  return (
    <div className={style['search_container'] + ' card'}>
      <div className={style['search_title']}><h4>Search</h4></div>
      <div className={style['search_content']}>
        <form action="" method="post">
          <input type="text" placeholder="..." />
          <button type="submit" className="btn-submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Search
