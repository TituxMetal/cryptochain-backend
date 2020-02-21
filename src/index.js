const bodyParser = require('body-parser')
const express = require('express')
const request = require('request')

const { Blockchain } = require('./blockchain')
const { port, rootNodeAddress } = require('./config')
const PubSub = require('./PubSub')

const app = express()
const blockchain = new Blockchain()
const pubsub = new PubSub({ blockchain })

setTimeout(() => pubsub.broadcastChain(), 1000)

app.use(bodyParser.json({ extended: true }))

app.get('/api/blocks', (_req, res) => {
  res.json(blockchain.chain)
})

app.post('/api/mine', (req, res) => {
  const { data } = req.body

  blockchain.addBlock({ data })
  pubsub.broadcastChain()

  res.redirect('/api/blocks')
})

const syncChains = () => {
  request({ url: `${rootNodeAddress}/api/blocks` }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const rootChain = JSON.parse(body)

      console.log('replace chain on a sync with: ', rootChain)
      blockchain.replaceChain(rootChain)
    }
  })
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)

  syncChains()
})
