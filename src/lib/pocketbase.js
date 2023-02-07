// note Update hard coded url to use ENV variables
// if NextJS is the same as vanilla react, use: process.env.REACT_APP_PB_URL


import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default pb;