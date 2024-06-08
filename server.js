const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection'); // variable to hold the connection using sequelize with the require method to import the connection from the config folder

const app = express();
// variable to hold the express method to create a new express application
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// function to sync the sequelize models to the database and then turn on the server
sequelize.sync({ force: false }).then(() => {
  // then promise to listen on the port and console log the port number
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
