var Item = sequelize.define('item', {
  //sequelize automatically creates createdAt and updatedAt and _id(?)
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    //unique: true(?)
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  }
})
