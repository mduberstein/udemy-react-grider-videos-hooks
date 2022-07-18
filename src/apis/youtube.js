import axios from 'axios';

const KEY = 'AIzaSyB8CRZdeQvcLMQ8M_l0c8cGM-ReF1tZMSE';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});




 