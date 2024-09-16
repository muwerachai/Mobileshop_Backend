module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction",
    {
      description: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.ENUM("WITHDRAWAL", "TRANSFER")
      },
      fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      netAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM("PENDING", "COMPLETED")
      }
    },
    {
      underscored: true,
      paranoid: true
    }
  );
  transaction.associate = (models) => {
    transaction.belongsTo(models.purchasedOrder, {
      foreignKey: {
        name: "purchasedOrderId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    transaction.belongsTo(models.supplier, {
      foreignKey: {
        name: "supplierId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return transaction;
};
