import express from 'express';
import path from 'path';
import routes from './routes/index.js'
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config/connection.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use(routes);

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('app connected to database')
    app.listen(PORT, () => {
      console.log(`app is listening to ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
