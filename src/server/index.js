import 'dotenv/config'
import express from 'express'
import logger from 'pino-http'

const app = express()

app.use(express.json())
app.use(logger())

const PORT = process.env.PORT || 3000

app.get('/ping', (req, res) => {
  res.json({
    message: 'PONG',
  })
})

app.listen(PORT, () => console.log(`Running on ${PORT}`))
