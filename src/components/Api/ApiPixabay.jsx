import axios from 'axios';

const API_KEY = '';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const SearchImages = async (query, page) => {
  const API_KEY = '35822629-b9359d31660fe7f3ad5b1d613';
  const url = 'https://pixabay.com/api/';
  
  const { data } = await axios.get(`${url}?q=${query}&page=${page}&key=${API_KEY}`);
  return data;
};
