
import formatPrice from '../formatPrice'

describe('formatPrice', () => {
  it('should format a number as a whole dollar price', () => {
    const obs = formatPrice(100.01)
    expect(obs).toEqual('$100')
  })

  it('should use M in place of millions of dollars', () => {
    const obs = formatPrice(100000.01)
    expect(obs).toEqual('$100K')
  })

  it('should use K in place of thousands of dollars', () => {
    const obs = formatPrice(1000000.01)
    expect(obs).toEqual('$1M')
  })

  it('should return null for a negative number', () => {
    const obs = formatPrice(-10)
    expect(obs).toBeNull()
  })

  it('should return null for NaN', () => {
    const obs = formatPrice(NaN)
    expect(obs).toBeNull()
  })
})
