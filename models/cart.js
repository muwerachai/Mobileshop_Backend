module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define("Cart", {}, { underscored: true });
  cart.associate = (models) => {
    cart.hasMany(models.cartItem, {
      foreignKey: "cartId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    cart.belongsTo(models.client, {
      foreignKey: "clientId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return cart;
};
