const { ADMIN_ROLE } = require("../config/constants");
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define(
    "admin",
    {
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      role: {
        type: DataTypes.ENUM(
          ADMIN_ROLE.SUPER_ADMIN,
          ADMIN_ROLE.PRODUCT_ADMIN,
          ADMIN_ROLE.ORDER_ADMIN,
          ADMIN_ROLE.CLIENT_ADMIN
        ),
        defaultValue: ADMIN_ROLE.SUPER_ADMIN,
        allowNull: false
      }
    },
    { underscored: true }
  );
  admin.associate = (models) => {
    admin.hasMany(models.product, {
      foreignKey: "changeStatusAdminId",
      allowNull: true,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return admin;
};
