
# E-Commerce Website - The Book Nook
[![License Badge](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contribution](#Contribution)
- [Contact](#Contact)

## Description
This application has the functionality of a mock e-commerce website focused around books. The tech stack involved uses JavaScript and Handlebars, as well as packages such as Express, mysql2, and sequelize to handle databases and routes.

## Installation
To install the dependencies required for the application, run the following line in the terminal.

```
npm install
```

## Usage
To run locally:
 - Clone the repository to your local computer.
 - Install all require dependencies using "npm i" or "npm install" in the integrated terminal on the root of the repository.
 - Copy the contents of the schema.sql file into the workbench and execute to create the database.
 - Create a .env file and insert values for DB_NAME, DB_USER, and DB_PASSWORD for the sequelize connection.
 - Run "node seeds/index.js" in the terminal to seed the database.
 - Run "node server.js" to start the server and access the deployed site at http://localhost:(HOST) (default 3001).

To access the deployed site, visit the link hosted by Heroku: (link goes here).

## Testing
To test the application, run the following line in the terminal.

```
npm test
```

## Contributors

[Alex Doll](https://github.com/X-is-For-Alex)

[Joshua Martinez](https://github.com/JoshuaMartinez1014)

[Hana Ahmed](https://github.com/Ahha0801)

[Nawal Jama](https://github.com/NawalJama)
