const MINE_RATE = 1000
const INITIAL_DIFFICULTY = 3
const STARTING_BALANCE = 1000

const defaultPort = process.env.PORT || 3000
let peerPort

if (process.env.GENERATE_PEER_PORT === 'true') {
  peerPort = parseInt(defaultPort) + Math.ceil(Math.random() * 1000)
}

const port = peerPort || defaultPort
const rootNodeAddress = `${process.env.ROOT_NODE_ADDRESS}:${defaultPort}`

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: '-----',
  hash: 'first-hash',
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: []
}

module.exports = {
  GENESIS_DATA,
  STARTING_BALANCE,
  MINE_RATE,
  port,
  rootNodeAddress
}
