import { useContext, useState } from 'react';
import { AppStateContext } from '../../contexts/AppContext';
import './Genre.css';

const Genre = () => {
  const { handleSelection } = useContext(AppStateContext);

  const genres = ['Mountion', 'Flowers', 'Beaches', 'Cities', 'OnePiece'];
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    handleSelection(genre);
  };
  return (
    <div className="genre__container">
      {genres.map((genre) => (
        <span
          key={genre}
          className={selectedGenre === genre ? 'active' : ''}
          onClick={() => handleGenreClick(genre)}
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default Genre;
