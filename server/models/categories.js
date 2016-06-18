
var Category = sequelize.define('category', {
  //sequelize automatically creates createdAt and updatedAt and _id(?)
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})
