const smartApp = require('./smartapp')
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

/* Express server used for local testing only */
server.use(express.json())
server.post('/', (req, res, next) => {
  smartApp.handleHttpCallback(req, res)
})

server.listen(PORT, () => console.log(`Open: http://127.0.0.1:${PORT}`))
