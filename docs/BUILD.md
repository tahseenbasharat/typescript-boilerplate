<a name="readme-top" id="readme-top"></a>

### Step-by-Step Guide

Create a new folder/directory for your project

```sh
  mkdir your-project-name && cd your-project-name
```

Initialize a new Node.js project

```sh
  npm init -y
```

Install the express package

```sh
  npm install express dotenv
```

Create a new file named `.env` and add the following code

```env
  APP_PORT=3000
```

Install the required dev dependencies for TypeScript and nodemon

```sh
  npm install -D typescript @types/node @types/express ts-node nodemon
```

Create a new file named `tsconfig.json` and add the following code

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

Create a new folder named `src`

```sh
  mkdir src
```

Create a new file named `app.ts` and `server.ts` in `src` folder and add the following code

```ts
import express from 'express'

const app = express()

// Middlewares
app.use(express.json())

export default app
```

```ts
import app from './app'

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Add the following scripts to your `package.json` file

```json
{
  "scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts"
  }
}
```
