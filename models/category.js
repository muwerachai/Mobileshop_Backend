module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },

    { underscored: true }
  );
  category.associate = (models) => {
    category.hasMany(models.product, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    category.hasMany(models.subCategory, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return category;
};
