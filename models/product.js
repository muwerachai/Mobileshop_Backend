const { PRODUCT_STATUS } = require("../config/constants");
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt: true
        }
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING(5000)
      },

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt: true
        }
      },

      mainPicture: {
        type: DataTypes.STRING
      },

      subPicture1: {
        type: DataTypes.STRING
      },
      subPicture2: {
        type: DataTypes.STRING
      },
      subPicture3: {
        type: DataTypes.STRING
      },
      subPicture4: {
        type: DataTypes.STRING
      },

      status: {
        type: DataTypes.ENUM(
          PRODUCT_STATUS.PENDING,
          PRODUCT_STATUS.APPROVED,
          PRODUCT_STATUS.REJECTED,
          PRODUCT_STATUS.HIDDEN
        ),
        allowNull: false,
        defaultValue: PRODUCT_STATUS.PENDING
      },

      rejectReason: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true
        }
      },

      secondHand: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    { underscored: true }
  );

  product.associate = (models) => {
    product.hasMany(models.cartItem, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    product.hasMany(models.promotion, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    product.hasMany(models.orderItem, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    product.hasMany(models.property, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    product.belongsTo(models.supplier, {
      foreignKey: {
        name: "supplierId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    product.belongsTo(models.category, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    product.belongsTo(models.subCategory, {
      foreignKey: {
        name: "subCategoryId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    product.belongsTo(models.admin, {
      foreignKey: {
        name: "changeStatusAdminId",
        allowNull: true
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };

  return product;
};
