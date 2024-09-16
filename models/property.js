module.exports = (sequelize, DataTypes) => {
  const property = sequelize.define(
    "property",
    {
      topic: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );
  property.associate = (models) => {
    property.belongsTo(models.product, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return property;
};
