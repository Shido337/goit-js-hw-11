import axios from 'axios';

const API_KEY = '53375029-d8153a1ccdcfd643a785188b2';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get('', { params });

  return response.data;
}
