import dotenv from 'dotenv'

import app from './app'

dotenv.config()

const PORT = process.env.APP_PORT

if (PORT === undefined) {
  console.error('APP_PORT is not set in .env file')
  process.exit(1)
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`App is running on ${process.env.APP_URL}:${PORT}`)
  console.log('Press CTRL-C to stop\n')
})
