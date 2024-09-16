module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt: true
        }
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      deliveryPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt: true
        }
      }
    },
    { underscored: true }
  );
  order.associate = (models) => {
    order.hasMany(models.orderItem, {
      foreignKey: "orderId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    order.hasOne(models.purchasedOrder, {
      foreignKey: "orderId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });

    order.belongsTo(models.client, {
      foreignKey: "clientId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    order.belongsTo(models.supplier, {
      foreignKey: "supplierId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return order;
};
