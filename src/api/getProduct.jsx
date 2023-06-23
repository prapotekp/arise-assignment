import axios from 'axios';

export const getProduct = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`https://dummyjson.com/products?limit=10&skip=${pageParam * 10}`);
    return { data, nextPage: pageParam + 1, totalPages: 10 };
}