import api from 'api/config';

export const getProductsByQuery = (query) => api.get(`/products?query=${query}`);
export const getProductsByCategories = (categories) => api.get(`/products?category=${categories}`);
