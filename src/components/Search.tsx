import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import './Search.scss';

interface SearchProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const clearSearchInput = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const input = e.currentTarget;
    input.value = '';
    input.blur();
  };

  return (
    <div className='box'>
      <input
        type='text'
        className='input'
        name='txt'
        onChange={(e) => onSearch(e)}
        onMouseOut={(e) => clearSearchInput(e)}
      />
      <MagnifyingGlass size={32} className='searchIcon' />
    </div>
  );
};

export default Search;
