const Sequelize = require("sequelize");
const sequelize = new Sequelize("devWeb", "root", "daniel", {
    host: "localhost",
    dialect: "mysql"    
});
module.exports = sequelize;
