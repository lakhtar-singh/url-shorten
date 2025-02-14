const mongoose = require("../db/db"); // Import the database connection



const linkSchema = new mongoose.Schema({
  short_link: { type: String, required: true , unique: true},
  original_link: { type: String, required: true },
  status: { type: Boolean, default:true },
  click: { type: Number, default: 0 },
  ip:{type:String},
  date: { type: Date, default: Date.now },
});

const Links = mongoose.model("url", linkSchema);
module.exports = Links;
