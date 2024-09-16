module.exports = (sequelize, DataTypes) => {
  const promotion = sequelize.define(
    "promotion",
    {
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt: true
        }
      },
      startedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
          notEmpty: true
        }
      },
      endedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );
  promotion.associate = (models) => {
    promotion.belongsTo(models.product, {
      foreignKey: "productId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return promotion;
};
