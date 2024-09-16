const { PURCHASED_ORDER_STATUS } = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  const purchasedOrder = sequelize.define(
    "purchasedOrder",
    {
      paymentAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
          notEmpty: true
        }
      },

      // Todo wait for omise research
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );
  purchasedOrder.associate = (models) => {
    purchasedOrder.hasOne(models.shippingOrder, {
      foreignKey: "purchasedOrderId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    purchasedOrder.belongsTo(models.order, {
      foreignKey: "orderId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    purchasedOrder.hasOne(models.transaction, {
      foreignKey: "purchasedOrderId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return purchasedOrder;
};
