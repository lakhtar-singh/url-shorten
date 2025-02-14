const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://singhlakhtar3:hn9b4iDmo8okwzdA@cluster0.oqgqj.mongodb.net/url";

mongoose
  .connect(MONGO_URI, { })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

module.exports = mongoose;
