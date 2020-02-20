const express = require('express')

const { Blockchain } = require('./blockchain')
const { port } = require('./config')

const app = express()
const blockchain = new Blockchain()

app.get('/api/blocks', (_req, res) => {
  res.json(blockchain.chain)
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
