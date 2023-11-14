import axios from 'axios';

// Creating an axios instance with custom configuration, in which we are going to
// include the api key of the RAWG page
console.log(import.meta.env.VITE_SOME_KEY);
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: `${import.meta.env.VITE_SOME_KEY}`,
  },
});
