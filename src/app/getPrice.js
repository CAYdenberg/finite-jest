const popsicle = require('popsicle')

const get = url => popsicle.get(url).use(popsicle.plugins.parse('json'))

export default function(mls, makeRequest = get) {
  return makeRequest(`http://localhost:3000/house-price?mls=${mls}`).then(res => {
    if (res.status === 200) {
      return res.body.price
    } else {
      return Promise.reject(res.status)
    }
  })
}
