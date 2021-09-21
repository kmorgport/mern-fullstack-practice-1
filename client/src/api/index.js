import axios from 'axios'

const url = 'http://localhostL:5000/posts';

export const fetchPosts = () => axios.get(url)