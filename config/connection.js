import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

const db = mongoose.connection;
export default db
