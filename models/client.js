module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define("client", {}, { underscored: true });
  client.associate = (models) => {
    client.belongsTo(models.user, {
      foreignKey: "userId",
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };
  return client;
};
