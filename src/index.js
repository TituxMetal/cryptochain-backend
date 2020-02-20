const bodyParser = require('body-parser')
const express = require('express')

const { Blockchain } = require('./blockchain')
const { port } = require('./config')

const app = express()
const blockchain = new Blockchain()

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
