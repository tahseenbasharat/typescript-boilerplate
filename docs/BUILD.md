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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
```

```ts
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

Install prettier and eslint for code formatting and linting

```sh
  npm install -D eslint eslint-config-prettier eslint-plugin-perfectionist eslint-plugin-prettier globals prettier @eslint/eslintrc @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create a new file named `.prettieriignore` and add the following code

```txt
node_modules
dist
build
```

Create a new file named `.prettierrc.json` and add the following code

```json
{
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "useTabs": false
}
```

Create a new file named `eslint.config.mjs` and add the following code

```js
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default defineConfig([
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:perfectionist/recommended-natural-legacy'
    ),

    ignores: ['node_modules/*', 'dist/*'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      perfectionist,
      prettier,
    },

    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
    },
  },
])
```

Add the following scripts to your `package.json` file to lint and format your code

```json
{
  "scripts": {
    "format": "prettier 'src/**/*.{ts,tsx}' --write",
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix"
  }
}
```
