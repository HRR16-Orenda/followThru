
var Category = sequelize.define('category', {
  //sequelize automatically creates createdAt and updatedAt and _id(?)
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})
