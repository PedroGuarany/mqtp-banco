import express from 'express'
import amqp from 'amqplib/callback_api.js'
import cors from 'cors'

import pages from './pages/pages.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const router = express.Router()

const transactions = []

router.get('/', (req, res) =>
  res.send(pages.defaultHtml())
)
router.get('/transacoes', (req, res) => {
  return res.send(pages.generateListOfTransactions(transactions))
})

amqp.connect('amqp://user:password@localhost', (error, connection) => {
  if (error) {
    throw error
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1
    }
    const queue = '07103435316'

    channel.assertQueue(queue, {
      durable: false
    })

    channel.consume(queue, (msg) => {
      transactions.push(JSON.parse(msg.content))
    }, {
      noAck: true
    })
  })
})

app.use('/', router)
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
