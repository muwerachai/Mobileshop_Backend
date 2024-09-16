module.exports = (sequelize, DataTypes) => {
  const balance = sequelize.define(
    "balance",
    {
      balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      underscored: true,
      paranoid: true
    }
  );
  balance.associate = (models) => {
    balance.belongsTo(models.supplier, {
      foreignKey: {
        name: "supplierId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return balance;
};
