import express from 'express';
import path from 'path';
import routes from './routes/index.js'
import mongoose from "mongoose";
const PORT = process.env.PORT || 3001
const mongoDBURL = process.env.mongoDBURL || 'mongodb://localhost:27017'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
//if (process.env.NODE_ENV === "production") {
// app.use(express.static(path.join(__dirname  , "../client/build")));
//}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(routes);
mongoose.set('strictQuery', true);
mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("DataBase Connected")).catch((err) => {
  console.log(err);
})
