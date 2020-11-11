import axios from "axios";

const KEY = 'AIzaSyBul5oFiWSObSLg9BM3OyhsH9xMeh6qqnw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});