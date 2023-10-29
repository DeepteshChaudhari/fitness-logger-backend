const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://diptesh151097:Mahadev123@cluster0.dgyjmsj.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
