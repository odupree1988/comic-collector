const User = require("./User");
const Comic = require("./Comic");

User.hasMany(Comic, {
  foreignKey: "user_id",
});

Comic.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { User, Comic };
