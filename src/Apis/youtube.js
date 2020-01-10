import axios from 'axios'

const KEY = 'AIzaSyADxWaK5p48HcX8jNQwHZtmXyh2DqTtgDE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }

})