import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;


const fetchImages = async (searchInputQuery, page,) => {
  try {
    const { data } = await axios.get(
      `${API_URL}?query=${searchInputQuery}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=EzgrzKMCQHzdil9V2ZwCjXau58wIdUL1C8qkHCuwuAc`
    );
    return data;
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch images from Unsplash API.', { autoClose: 3000 });
  }
};

export { fetchImages };
