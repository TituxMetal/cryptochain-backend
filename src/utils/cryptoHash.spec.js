const cryptoHash = require('./cryptoHash')

describe('cryptoHash()', () => {
  it('generate a SHA-256 hashed output', () => {
    const hash =
      '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'

    expect(cryptoHash('foo')).toEqual(hash)
  })

  it('produces the same hash with the same arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three')).toEqual(
      cryptoHash('three', 'two', 'one')
    )
  })
})
