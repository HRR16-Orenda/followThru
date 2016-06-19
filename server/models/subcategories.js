var Subcategory = sequelize.define('subcategory', {
  //sequelize automatically creates createdAt and updatedAt and _id(?)
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    // defaultValue: //this needs javascript to determine
  }
})
