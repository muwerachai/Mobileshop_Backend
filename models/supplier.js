module.exports = (sequelize, DataTypes) => {
  const supplier = sequelize.define(
    "supplier",
    {
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING(400)
      },
      profilePicture: {
        type: DataTypes.STRING
      },
      lineId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      bankName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },

      bankAccount: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );
  supplier.associate = (models) => {
    supplier.hasMany(models.product, {
      foreignKey: "supplierId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    supplier.hasMany(models.order, {
      foreignKey: "supplierId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    supplier.belongsTo(models.user, {
      foreignKey: "userId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    supplier.hasOne(models.balance, {
      foreignKey: "supplierId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    supplier.hasMany(models.transaction, {
      foreignKey: "supplierId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return supplier;
};
