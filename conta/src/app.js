import express from 'express'
import mqtt from 'mqtt'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const router = express.Router()
const databaseMock = [
  {
    id: 1,
    cpf: '12345678910',
    nome: 'Guarany',
    saldo: 1000,
    transacoes: []
  },
  {
    id: 2,
    cpf: '12345678911',
    nome: 'Ismael',
    saldo: 1000,
    transacoes: []
  }
]

const client = mqtt.connect('ws://localhost:15675/ws', {
  username: 'user',
  password: 'password'
})

router.get('/', (req, res) => { res.send('Rodando aplicação. Acesse a rota /user/:id para exibir informações.') })

router.get('/user', (req, res) => {
  res.json(databaseMock)
})

router.get('/user/:cpf', (req, res) => {
  const { cpf } = req.params
  const user = databaseMock.find(user => user.cpf === cpf)
  if (!user) {
    res.status(404).json({ message: 'Usuário não encontrado' })
  }
  res.json(user)
})

router.post('/user/:cpf/transferencia', (req, res) => {
  try {
    const { cpf } = req.params
    const { destinatario, valor } = req.body

    const userOrigem = databaseMock.find(user => user.cpf === cpf)
    const userDestinatario = databaseMock.find(user => user.cpf === destinatario)
    if (!userOrigem || !userDestinatario) {
      res.status(400).send('Usuário não encontrado')
    }
    if (userOrigem.saldo < valor) {
      res.status(400).send('Saldo insuficiente')
    }

    userOrigem.saldo -= valor
    userDestinatario.saldo += valor
    const transacao = {
      data: new Date(),
      valor,
      destinatario
    }

    userDestinatario.transacoes.push(transacao)
    userOrigem.transacoes.push(transacao)

    client.publish('all', Buffer.from(JSON.stringify(transacao)))
    client.publish(destinatario, Buffer.from(JSON.stringify(transacao)))
    client.publish(cpf, Buffer.from(JSON.stringify(transacao)))

    res.send('Transferência realizada com sucesso')
  } catch (error) {
    console.log(error)
    res.status(400).send('Houve um erro na trasferência')
  }
})

app.use('/', router)
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
