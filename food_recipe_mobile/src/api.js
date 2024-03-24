import axios from 'axios';
// require('dotenv').config();

// const { API_ID, API_KEY } = process.env;

const API_ID = 'cfdd3433'; 
const API_KEY = '16b9b88d3d3a20cd2ebbd48b1b43212d'; 

const baseURL = 'https://api.edamam.com/search'; 

const fetchRecipes = async (search) => {
  try {
    const response = await axios.get(`${baseURL}?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=12`);
    return response.data.hits; 
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export { fetchRecipes };
