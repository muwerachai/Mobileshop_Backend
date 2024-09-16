module.exports = (sequelize, DataTypes) => {
  const subCategory = sequelize.define(
    "subCategory",
    {
      subCategoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  subCategory.associate = (models) => {
    subCategory.belongsTo(models.category, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    subCategory.hasMany(models.product, {
      foreignKey: {
        name: "subCategoryId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return subCategory;
};
