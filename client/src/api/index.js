import axios from 'axios';
const url = 'http://localhost:5000/posts';
  //send request to server
export const fetchPosts = () => axios.get(url)
