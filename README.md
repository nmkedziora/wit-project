# WIT Tech Leaders SWE Project

This Node.js x TypeScript repository is built upon the [LogRocket Blog post "How to set up TypeScript with Node.js and Express"](https://blog.logrocket.com/how-to-set-up-node-typescript-express/).

## Note from the Author

This project is not production-ready. It is intended for my personal educational purposes only. Please refrain from using this code in a production environment. Feel free to explore, experiment, and learn from the codebase.

## Figma low-fi wireframes

Get a sneak peek into the project vision with low-fidelity wireframes, available on [Figma](https://www.figma.com/file/3kRV4coW8h9TENg7pgDFCe/WIT-Marketplace?type=design&node-id=883174-247&mode=design&t=f3g8xDEupM5RyhFL-0).

The goal of the project wasn't to replicate the views exactly as designed in Figma.
Due to time constraints and a strategic decision to prioritize backend development, database setup, and infrastructure/architecture topics,
the focus was shifted away from the visual aspects of the app.

Consequently, the final implementation diverges significantly from the Figma designs.

## Branches

- `main`: Default branch. It holds the initial version of the application with an in-memory model.
- `step1-db-model`: Branched off from the `main` branch. It contains the version of the application with the MySQL model.

## Technolgies

- Node.js
- TypeScript
- MySQL
- Docker

## Prerequisites

Make sure you have `Node.js`, `npx`, `yarn` and `Docker` installed.

For installation, follow the instructions at:

- [Node.js](https://nodejs.org/): Ensure that `Node.js`, preferably version 16 or higher, is installed on your system, as this project utilizes the latest versions of TypeScript and Nodemon.
- [npx](https://www.npmjs.com/package/npx): `npx` is a command-line utility. It stands for "Node Package Runner." It is used to execute Node.js packages directly without having to install them globally.
- [yarn](https://classic.yarnpkg.com/en/docs/getting-started): `yarn` is a package manager for your code.
- [Docker](https://docs.docker.com/get-docker/): `Docker` is an open platform for developing, shipping, and running applications.

## Setup

Clone the repository to your local machine

WITH HTTPS:

```bash
git clone https://github.com/nmkedziora/wit-project.git
```

WITH SSH:

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

All commands should be executed from `wit-project` directory unless specified otherwise.

### Development

#### 1. Start Node.js server

For development purposes, you can run the application using Nodemon to automatically restart the server when changes are detected. Execute the following command:

```bash
yarn dev
```

This will start the server at `http://localhost:8080` by default. You can change the port in the `src/index.ts` file or create an `.env` file to manage the environment-specific variables separately.

#### 2. Start and Initialize MySQL databse

For simplicity, the MySQL database is run as a Docker service. The `docker-compose.yml` file uses the official MySQL image from Docker Hub. Two database initialization files are automatically mounted in Docker:

1. `./src/db/create-db.sql`: This file, executed automatically on container start, uses the root user to create the wit database and its three users.

2. `./src/db/create-schema.sql`: This file, using the previously created `witadmin` user, creates tables and populates them with initial data. This file must be run manually (see instructions below).

To start the Docker container execute:

```bash
docker-compose up
```

To create tables and populate them with initial data, run:

```bash
docker compose exec db sh -c "mysql -hdb -uwitadmin -pwitadmin < /wit-project-init create-schema.sql"
```

After running these two commands, the MySQL database is up and running and populated with data. You can now perform INSERT, UPDATE, DELETE, and SELECT operations on it.

### Production

This project is **NOT** production-ready. It is intended for my personal educational purposes only.

However, if you know what you’re doing, you can build the TypeScript files and start the server for production. Run the following commands:

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

The project uses the Model-View-Controller (MVC) architecture.

The project structure is organized as follows:

```bash
project-root/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── services/
│   ├── views/
│   ├── index.ts
│   ├── ...
├── docker-compose.yml
├── package.json
└── ...
```

- `src/`: Contains TypeScript source files.
  - `controllers/`: Contains the controller files that handle the logic and interaction between the models and views.
  - `models/`: Contains the files that define the data structures and interact with the database.
  - `views/`: Contains the files that define how data is presented to the user.
  - `db/`: Contains the SQL files for initializing and populating the database.
  - `index.ts`: The main entry point of the application. Configures and starts the Node.js application.
  - `router.ts`: Contains the route definitions for the application.
  - `config.ts`: Holds configuration settings for the application.
- `dist/`: Output directory created during build for compiled TypeScript files.
- `package.json`: Project configuration and dependencies.
- `tsconfig.json`: TypeScript configuration.
- `docker-compose.yml`: Docker configuration file.

You can customize the project configuration in the `tsconfig.json` file and adjust the server settings in the `src/index.ts` file.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
