import ajax from './ajax'

export default function(mls, ajaxLib = ajax) {
  return ajaxLib(mls).then(res => {
    return res.body.price
  })
}
