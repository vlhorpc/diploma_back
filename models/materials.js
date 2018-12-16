module.exports = (sequelize, DataTypes) => {
  const Materials = sequelize.define('Materials', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    mark: DataTypes.STRING,
    interest_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'materials'
  });

  return Materials;
};
