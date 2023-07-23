import { createContext, useState, useEffect, useCallback, useRef } from 'react';

import { fetchImages } from '../api/unsplashApi';
import { toast } from 'react-toastify';

export const AppStateContext = createContext();
// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const searchInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = useCallback(async () => {
    try {
      if (searchInputRef.current?.value) {
        setIsLoading(true);
        const data = await fetchImages(searchInputRef.current.value, page);

        setImages(data.results);
        setTotalPages(data.total_pages);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast.error('Failed to fetch images from Unsplash API.', {
        autoClose: 3000,
      });
    }
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInputRef.current.value.trim()) {
      setImages([]);
      setTotalPages(0);
    } else {
      getImages();
      setPage(1);
    }
  };

  const handleSelection = (selected) => {
    searchInputRef.current.value = selected;
    getImages();
    setPage(1);
  };

  const handleInputChange = (e) => {
    const newPage = parseInt(e.target.value);

    if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    } else {
      setPage('');
    }
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getImages();
  }, [getImages, searchInputRef]);

  return (
    <AppStateContext.Provider
      value={{
        images,
        page,
        setPage,
        totalPages,
        isLoading,

        handleSearch,
        searchInputRef,
        handleSelection,
        handleInputChange,
        handlePreviousPage,
        handleNextPage,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppContext;
