import React, { useState } from 'react';
import Button from '../../atom/Button';
import style from './index.module.scss';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?name=${value}&email=${value}`, { replace: false });
  }

  return (
    <div className={style['search_container'] + ' card'}>
      <div className={style['search_title']}><h4>Search</h4></div>
      <div className={style['search_content']}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="..." 
          value={value} 
          onChange={(e) => setValue(e.target.value)} />
        <Button color='#ff90e8' text='Search' />
      </form>
      </div>
    </div>
  );
};

export default Search;
