const { USER_ROLE } = require("../config/constants");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      role: {
        type: DataTypes.ENUM(USER_ROLE.CLIENT, USER_ROLE.SUPPLIER),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      googleId: {
        type: DataTypes.STRING,
        defaultValue: null
      }
    },

    { underscored: true }
  );
  user.associate = (models) => {
    user.hasOne(models.client, {
      foreignKey: "userId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    user.hasOne(models.supplier, {
      foreignKey: "userId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };

  return user;
};
