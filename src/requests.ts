import axios from 'axios';

export const getProducts = () =>
  axios.get('https://rn-mentoring.herokuapp.com/api/v2/storefront/products');

export const getImageById = (
  id: string,
  height: number,
  width: number = height,
) => `https://picsum.photos/id/${id}/${height}/${width}`;
