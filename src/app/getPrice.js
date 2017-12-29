import ajax from './ajax'

export default function(mls, ajaxLib = ajax) {
  return ajaxLib(mls).then(res => {
    if (res.status === 200) {
      return res.body.price
    } else {
      return Promise.reject(res.status)
    }
  })
}
