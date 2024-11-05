// src/services/api.js
import axios from 'axios';

const API_URL = 'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI';

export const fetchProducts = async ({ query, pageNumber, size, sort, prices }) => {
  const response = await axios.post(API_URL, {
    query,
    pageNumber,
    size,
    sort,
    prices
  });
  console.log(response.data);
  return response.data;
};
