
const ajaxLibSuccess = jest.fn(() => {
  return Promise.resolve(300000)
})

const ajaxLibFailure = jest.fn(() => {
  return Promise.reject(new Error(500))
})
