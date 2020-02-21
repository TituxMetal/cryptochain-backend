const bodyParser = require('body-parser')
const express = require('express')

const { Blockchain } = require('./blockchain')
const { port } = require('./config')
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

  res.redirect('/api/blocks')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
