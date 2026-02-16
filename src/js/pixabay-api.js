import axios from 'axios';

const API_KEY = '54652097-fa33845d90f17562231f3e558';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const responce = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return responce.data;
}
