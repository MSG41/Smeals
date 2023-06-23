# Smeals - A quick and easy meal filtering app.

This is a project to showcase my skills with Vue@3. I already have experience with React but I wanted to show that I can learn new frameworks and technologies quickly.

## Recommended IDE Setup

If you use VS code please make sure to have the following extensions installed:
["Vue.volar", "Vue.vscode-typescript-vue-plugin"]

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest]

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress]

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Structure

1.  I started the projet by addind `Services` and `Types` folders to the project. I will be using `Axios` to make API calls to the backend.

This is the baseURL = 'https://www.themealdb.com/api/json/v1/1'

Adding `Services` to the `src` directory simplifies maintenance, promotes code reusability, and improves project organisation by providing a centralised location for easily implementing services wherever needed in the app.

Adding types to code brings several benefits. Firstly, it enhances code quality by providing static type checking, catching errors and bugs at compile-time rather than runtime. This leads to improved code reliability and reduces the likelihood of unexpected issues. Secondly, types improve code readability and maintainability by serving as documentation, making it easier for developers to understand the expected data structures and function signatures. Lastly, types enable better code editor support, offering autocompletion, intelligent suggestions, and enhanced refactoring capabilities, resulting in increased developer productivity.

2. Install the following dependencies:

Axios:
npm install axios --save-dev

SaaS:
npm install sass --save-dev

3. I then added the components to the `component` folder in the `src` directory. I will be using the components to build the UI of the app.
