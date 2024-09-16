module.exports = (sequelize, DataTypes) => {
  const orderItem = sequelize.define(
    "orderItem",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt: true
        }
      },
      promotionId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: true
        }
      }
    },
    { underscored: true }
  );
  orderItem.associate = (models) => {
    orderItem.belongsTo(models.order, {
      foreignKey: "orderId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    orderItem.belongsTo(models.product, {
      foreignKey: "productId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return orderItem;
};
