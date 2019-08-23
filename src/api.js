import axios from 'axios';

const endPoint = process.env.NODE_ENV !== 'development' ? 'http://localhost:3000/' : 'http://jsonplaceholder.typicode.com/';

export default axios.create({
	baseURL: endPoint
});