const Block = require('./Block')
const { GENESIS_DATA } = require('./config')

describe('Block', () => {
  const timestamp = 'a-date'
  const lastHash = 'foo-hash'
  const hash = 'bar-hash'
  const data = ['blockchain', 'data']
  const block = new Block({ timestamp, lastHash, hash, data })

  it('has a timestamp, lastHash, hash and data properties', () => {
    expect(block.timestamp).toEqual(timestamp)
    expect(block.lastHash).toEqual(lastHash)
    expect(block.hash).toEqual(hash)
    expect(block.data).toEqual(data)
  })

  describe('genesis()', () => {
    const genesisBlock = Block.genesis()

    it('returns a Block instance', () => {
      expect(genesisBlock instanceof Block).toBeTruthy()
    })

    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA)
    })
  })
})
