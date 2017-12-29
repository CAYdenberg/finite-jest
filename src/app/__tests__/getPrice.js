import getPrice from '../getPrice'

const ajaxLibSuccess = jest.fn(() => {
  return Promise.resolve({
    status: 200,
    body: {price: 300000}
  })
})

const ajaxLibFailure = jest.fn(() => {
  return Promise.resolve({
    status: 500
  })
})

describe('getPrice', () => {
  it('should call the ajax library')

  it('should return a promise that resolves to the house price')

  it('should return an error if the API returns an error')
})
