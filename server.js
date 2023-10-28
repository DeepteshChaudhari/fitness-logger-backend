import express from 'express'
import path from 'path';
import apiRoutes from './routes/api/index.js';
import db from './config/connection.js'

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
//if (process.env.NODE_ENV === "production") {
//  app.use(express.static(path.join(__dirname, "../client/build")));
//}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(apiRoutes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
