# WIT Tech Leaders SWE Project

This Node.js x TypeScript repository is built upon the [LogRocket Blog post "How to set up TypeScript with Node.js and Express"](https://blog.logrocket.com/how-to-set-up-node-typescript-express/).

## Prerequisites

Make sure you have `Node.js`, `npx` and `yarn` installed.

For installation, follow the instructions at:

- [Node.js](https://nodejs.org/): Ensure that `Node.js`, preferably version 16 or higher, is installed on your system, as this project utilizes the latest versions of TypeScript and Nodemon.
- [npx](https://www.npmjs.com/package/npx): `npx` is a command-line utility. It stands for "Node Package Runner." It is used to execute Node.js packages directly without having to install them globally.
- [yarn](https://classic.yarnpkg.com/en/docs/getting-started): `yarn` is a package manager for your code.

## Setup

Clone the repository to your local machine WITH HTTPS:

```bash
git clone https://github.com/nmkedziora/wit-project.git
```

or WITH SSH:

```bash
git clone git@github.com:nmkedziora/wit-project.git
```

Navigate to the project directory:

```bash
cd wit-project/
```

Install the project dependencies including TypeScript and Nodemon:

```bash
yarn
```

## Usage Instructions

### Development

For development purposes, you can run the application using Nodemon to automatically restart the server when changes are detected. Execute the following command:

```bash
yarn dev
```

This will start the server at `http://localhost:3000` by default. You can change the port in the `src/index.ts` file or create an `.env` file to manage the environment-specific variables separately.

### Production

For production, you can build the TypeScript files and then start the server. Run the following commands:

```bash
yarn build
yarn start
```

### File formatter

This project uses [Prettier](https://prettier.io/docs/en/) for file formatting.
To format all files with Prettier run:

```bash
npx prettier write .
```

Formatting from the command line is a good way to get started, but you get the most from Prettier by running it from your editor. To set up Prettier with editor of your choice follow instructions at [Prettier "Set up you editor" docs](https://prettier.io/docs/en/install.html#set-up-your-editor).

## Project Structure

The project structure is organized as follows:

- `src`: Contains TypeScript source files
  - `index.ts`: Configures and starts the Express application
- `dist`: Output directory created during build for compiled TypeScript files
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration

You can customize the project configuration i nthe `tsconfig.json` file and adjust the server settings in the `src/index.ts` file.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
