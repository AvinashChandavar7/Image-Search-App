import { useContext } from 'react';
import { AppStateContext } from '../../contexts/AppContext';
import './Paginations.css';

const Paginations = () => {
  const {
    page,
    totalPages,
    handleInputChange,
    handlePreviousPage,
    handleNextPage,
  } = useContext(AppStateContext);

  return (
    <div className="p__container">
      <div className="p__btn">
        {page > 1 && (
          <button onClick={handlePreviousPage} className="p__prebtn">
            Previous
          </button>
        )}
        {page < totalPages && <button onClick={handleNextPage}>Next</button>}
      </div>

      <div className="p__pages">
        {page <= totalPages && (
          <p>
            Page &nbsp;
            <input type="number" value={page} onChange={handleInputChange} /> of
            &nbsp; {totalPages}
          </p>
        )}
      </div>
    </div>
  );
};

export default Paginations;
