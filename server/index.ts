import next from 'next'
import express from 'express'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => {
    handle(req, res)
  })

  function startServer() {
    server.listen(port, () => {
      console.log(`Server is running on ${port}`)
    })
  }

  startServer()
})
