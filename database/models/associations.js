import User from "./User.js";
import Links from "./Links.js";

User.hasMany(Links);
Links.belongsTo(User);
