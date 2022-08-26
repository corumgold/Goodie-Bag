const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media.istockphoto.com/photos/assortment-of-multicolored-candies-jelly-beans-and-lollipops-picture-id1270389595?b=1&k=20&m=1270389595&s=170667a&w=0&h=j9las-CDlYSyWhmg-2jZDg22UAPGjpSv88aFsr8u-38=",
  },
});
