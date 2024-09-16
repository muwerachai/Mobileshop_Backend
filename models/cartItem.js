module.exports = (sequelize, DataTypes) => {
  const cartItem = sequelize.define(
    "cartItem",
    {
      quantity: {
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
  cartItem.associate = (models) => {
    cartItem.belongsTo(models.cart, {
      foreignKey: "cartId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    cartItem.belongsTo(models.product, {
      foreignKey: "productId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return cartItem;
};
