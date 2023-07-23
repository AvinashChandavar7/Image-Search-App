import { memo, useContext } from 'react';
import { AppStateContext } from '../../contexts/AppContext';
import Loading from '../../utils/Loading/Loading';
import Card from '../Card/Card';

import './GridSection.css';

// eslint-disable-next-line react/display-name
const GridSection = memo(() => {
  const { images, isLoading } = useContext(AppStateContext);
  return (
    <section className="grid">
      <div className="grid__container">
        {isLoading ? (
          <div className="grid__loading">
            <Loading />
          </div>
        ) : images.length === 0 ? (
          <h1>No images found</h1>
        ) : (
          <Card images={images} />
        )}
      </div>
    </section>
  );
});

export default GridSection;
