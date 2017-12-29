
const RESPONSE_TIME = 500

export default function() {
  return new Promise((resolve) => {
    const result = Math.round(Math.random())

    setTimeout(() => {
      if (!result) return resolve({status: 500})

      return resolve({status: 200, body: {price: 450000}})
    }, RESPONSE_TIME)
  })
}
