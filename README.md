# Smeals - A quick and easy meal filtering app.

This is a project to showcase my skills with Vue@3. I already have experience with React but I wanted to show that I can learn new frameworks and technologies quickly.

## Recommended IDE Setup

If you use VS code please make sure to have the following extensions installed:
["Vue.volar", "Vue.vscode-typescript-vue-plugin"]

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode]: You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette 
    Tip:( mac: `cmd+shift+p` then type `built` and click on `Extensions: Show Built-in Extensions`)
     Tip:( win: `cmd+shift+p` then type `built` and click on `Extensions: Show Built-in Extensions`)

    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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

1.  I started the projet by addind Services and Types folders to the project. I will be using Axios to make API calls to the backend.

This is the baseURL = 'https://www.themealdb.com/api/json/v1/1'


Adding Services to the `src` directory simplifies maintenance, promotes code reusability, and improves project organisation by providing a centralised location for easily implementing services wherever needed in the app.

Adding types to code brings several benefits. Firstly, it enhances code quality by providing static type checking, catching errors and bugs at compile-time rather than runtime. This leads to improved code reliability and reduces the likelihood of unexpected issues. Secondly, types improve code readability and maintainability by serving as documentation, making it easier for developers to understand the expected data structures and function signatures. Lastly, types enable better code editor support, offering autocompletion, intelligent suggestions, and enhanced refactoring capabilities, resulting in increased developer productivity.

2. I then added the components folder to the `src` directory. I will be using the components to build the UI of the app.

3. Install the following dependencies:
SaaS:npm install sass --save-dev
Axios: npm install axios --save-dev
Vue Router: npm install vue-router@4 --save-dev




