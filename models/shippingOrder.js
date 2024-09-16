const { SHIPPING_ORDER_STATUS } = require("../config/constants");
module.exports = (sequelize, DataTypes) => {
  const shippingOrder = sequelize.define(
    "shippingOrder",
    {
      status: {
        type: DataTypes.ENUM(
          SHIPPING_ORDER_STATUS.TO_SHIPPING_COMPANY,
          SHIPPING_ORDER_STATUS.TO_CLIENT,
          SHIPPING_ORDER_STATUS.DELIVERED
        ),
        allowNull: false,
        validate: {
          notEmpty: true
        },
        defaultValue: SHIPPING_ORDER_STATUS.TO_SHIPPING_COMPANY
      },

      //todo generate a unique id from frontend function
      trackingId: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );
  shippingOrder.associate = (models) => {
    shippingOrder.belongsTo(models.purchasedOrder, {
      foreignKey: {
        name: "purchasedOrderId",
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    });
  };
  return shippingOrder;
};
