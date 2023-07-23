import { useContext } from 'react';
import { AppStateContext } from '../../contexts/AppContext';
import serach from '../../assets/search.svg';
import './SearchBox.css';

const SearchBox = () => {
  const { searchInputRef, handleSearch } = useContext(AppStateContext);
  return (
    <form onSubmit={handleSearch} className="searchbox__contianer">
      <div className="searchbox">
        <input
          type="search"
          aria-label="Search for images"
          placeholder="Search"
          ref={searchInputRef}
        />

        <button aria-label="Search">
          <img src={serach} alt="logo" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
