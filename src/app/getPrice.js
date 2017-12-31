import axios from 'popsicle'

export default function(mls, makeRequest = axios.get) {
  return makeRequest(`/house-price?mls=${mls}`).then(res => {
    if (res.status === 200) {
      return res.body.price
    } else {
      return Promise.reject(res.status)
    }
  })
}
