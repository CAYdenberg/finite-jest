import getPrice from '../getPrice'

const ajaxLibSuccess = jest.fn(() => {
  return Promise.resolve({
    status: 200,
    body: {price: 300000}
  })
})

const ajaxLibFailure = jest.fn(() => {
  return Promise.reject(new Error({status: 500}))
})

describe('getPrice', () => {
  it('should call the ajax library', () => {
    getPrice('E12345', ajaxLibSuccess)
    expect(ajaxLibSuccess).toHaveBeenCalled()
  })

  it('should return a promise that resolves to the house price', () => {
    const obs = getPrice('E12345', ajaxLibSuccess)
    return obs.then(result => expect(result).toEqual(300000))
  })

  it('should return a promise that resolves to the house price, using resolves', () => {
    const obs = getPrice('E12345', ajaxLibSuccess)
    expect(obs).resolves.toEqual(300000)
  })

  it('should return an error if the API returns an error', () => {
    const obs = getPrice('E12345', ajaxLibFailure)
    expect(obs).rejects.toThrow(500)
  })
})
