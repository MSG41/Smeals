# Smeals - A Quick and Easy Meal Filtering App

Smeals is a versatile application designed to showcase the adaptability and rapid learning capabilities in modern web development, particularly with Vue.js 3.

Built on a solid foundation of React experience, this project underscores the ability to adopt new frameworks and technologies quickly and effectively.

## Recommended IDE Setup

For a seamless development experience with Visual Studio Code, install the following extensions:

- Vue.volar
- Vue.vscode-typescript-vue-plugin

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

1. [Node.js](https://nodejs.org/en/): A JavaScript runtime built on Chrome's V8 JavaScript engine. It's used to execute JavaScript on the server-side.

2. [npm](https://www.npmjs.com/): Node Package Manager is used for package management. It gets installed on your system with Node.js.

3. [Visual Studio Code](https://code.visualstudio.com/): A preferred code editor for this project. However, you can use any editor of your choice.

4. VS Code Extensions: To facilitate the development process, install the following extensions for VS Code:

   - Vue.volar
   - Vue.vscode-typescript-vue-plugin

5. [Git](https://git-scm.com/): A distributed version-control system for tracking changes in source code during software development.

If not already configured, make sure to [set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git) on your local machine.

### Installation

Follow these simple steps to install and run the Smeals project on your local machine:

1. **Clone the Repository**: Open your terminal, navigate to the directory where you want the project files to be, and run:

   ```sh
   git clone https://github.com/MSG41/Smeals.git
   ```

2. **Navigate to the Project Directory**: Move into the Smeals project directory by typing:

   ```sh
   cd Smeals
   ```

3. **Install the Dependencies**: Now, you need to install all the necessary dependencies. You can do this by running:

   ```sh
   npm install
   ```

4. **Run Tests**: To ensure everything is working correctly, run the tests using the following command:

   ```sh
   npm run test
   ```

5. **Run the Application**: Start the application in development mode by using the command:

   ```sh
   npm run dev
   ```

The Smeals application should now be up and running on your local machine!

## Project Structure

### Folder Structure

- **Services and Types**: Start by adding a `Services` folder to the project. The `Services` folder, located in the `src` directory, is used for implementing services that make API calls to the backend using `Axios`. The base URL for the API calls is `'https://www.themealdb.com/api/json/v1/1'`. This structure simplifies maintenance, promotes code reusability, and improves project organization by providing a centralized location for easily implementing services wherever needed in the app. Additionally, include a `Types` folder containing type definitions that enhance code quality by providing static type checking. This catches errors and bugs at compile-time rather than runtime, improving code reliability and reducing the likelihood of unexpected issues. Types also enhance code readability, serve as documentation for expected data structures and function signatures, and enable better code editor support, offering autocompletion, intelligent suggestions, and enhanced refactoring capabilities.

- **Components**: Create a `components` folder in the `src` directory to house your UI components. Each component should have its own folder, including both the component's TypeScript file and its accompanying SCSS file. This structure promotes code modularity, separation of concerns, and ease of component management and reuse.

- **Styling with SCSS**: For styling purposes, the project uses SCSS (Sass) to enhance your styling capabilities and improve code maintainability. You can include SCSS files for each component alongside their respective component files. SCSS provides powerful features, such as variables, nesting, mixins, and more, which allow you to leverage advanced styling techniques. Although this project keeps the usage of SCSS without utilizing the advanced features, it remains scalable. However, you have the freedom to use SCSS to its full potential if desired, giving you flexibility and extensibility in your styling approach.

- **Store with Pinia**: Implement the store (state management) using Pinia, a modern Vue state management library. Create a separate `store` folder in the `src` directory to house your store-related files. Within this folder, include store modules, actions, mutations, and getters as needed. Pinia provides a reactive and easy-to-use store API that integrates seamlessly with Vue components.

- **Tests with Vitest**: Vitest is a testing library used for writing tests in your project. Create a `tests` folder within each component folder to hold the corresponding test files. Place the test files directly alongside the component and SCSS files. Vitest offers a comprehensive testing framework with features like assertions, mocking, and test runners, allowing you to thoroughly test your components and ensure their functionality.

### Included Framework and Libraries

The project utilizes the following framework and libraries:

#### Framework

- **Vue.js**: A progressive JavaScript framework for building user interfaces. Vue.js offers a flexible and efficient way to create interactive web applications.

#### Libraries and Tools

- **Axios**: A popular HTTP client library used for making API calls to the backend. Axios simplifies the process of handling HTTP requests and responses.

- **Pinia**: A modern state management library for Vue.js applications. Pinia provides a reactive and easy-to-use store API, making it straightforward to manage application state.

- **Vitest**: A testing library designed for Vue.js applications. Vitest offers a comprehensive testing framework with features such as assertions, mocking, and test runners, allowing you to write thorough tests for your components.

#### Development Dependencies

- **eslint**: A pluggable and configurable linter tool for identifying and reporting code errors, style issues, and potential bugs.
- **prettier**: A code formatter that automatically enforces consistent code style, ensuring that your code is easy to read and understand.
- **typescript**: A strongly typed superset of JavaScript that adds static typing to the language. TypeScript improves code quality and provides enhanced tooling support for better development productivity.

### Handling of Application State

The project utilizes the Pinia store for managing the application state. The store provides a centralized location for storing and accessing data, enabling seamless communication between components and facilitating a reactive data flow.

### Deployment with Vercel

The project is deployed using Vercel, a cloud platform for static and serverless deployments. Vercel offers a seamless and efficient deployment process, allowing you to test your project on various devices in real-time. It provides features like automatic deployments, custom domains, and scalability. Deploying your project with Vercel ensures a reliable and performant application accessible to a wide range of devices.

You can access the deployed project at [smeals.vercel.app](https://smeals.vercel.app).

By following this project structure, utilizing the recommended libraries and frameworks, effectively managing the application state, and deploying with Vercel, you can build a robust and scalable Vue.js application.
