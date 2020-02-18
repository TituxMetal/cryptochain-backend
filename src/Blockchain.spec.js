const Blockchain = require('./Blockchain')
const Block = require('./Block')

describe('Blockchain', () => {
  const blockchain = new Blockchain()

  it('contains a `chain` Array instance', () => {
    expect(blockchain.chain instanceof Array).toBeTruthy()
  })

  it('starts with the genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis())
  })

  it('adds a new block to the chain', () => {
    const newData = 'foo-bar'

    blockchain.addBlock({ data: newData })

    const lastBlock = blockchain.chain.length - 1

    expect(blockchain.chain[lastBlock].data).toEqual(newData)
  })
})
