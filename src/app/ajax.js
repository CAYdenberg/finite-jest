
const RESPONSE_TIME = 500

export default function() {
  return new Promise((resolve, reject) => {
    const result = Math.round(Math.random())

    setTimeout(() => {
      if (!result) return reject(new Error(500))
      return resolve(450000)
    }, RESPONSE_TIME)
  })
}
