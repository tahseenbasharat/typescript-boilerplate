import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.APP_PORT

if (port === undefined) {
  console.error('APP_PORT is not set in .env file')
  process.exit(1)
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
