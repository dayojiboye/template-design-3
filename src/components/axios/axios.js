import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://template-design-3-database.firebaseio.com/',
});

export default instance
