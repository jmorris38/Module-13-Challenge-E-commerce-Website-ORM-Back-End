const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      // use the special Sequelize DataTypes object to provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      primaryKey: true, // instruct that this is the Primary Key
      autoIncrement: true, // turn on auto increment
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);
// export to index.js to associate each model with the other
module.exports = Category;
