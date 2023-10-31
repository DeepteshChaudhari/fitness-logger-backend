const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
//const corsOptions = {
//origin: [
//"http://localhost:3000",
//"https://fitnesslogger.netlify.app",
//],
//credentials: true,
//methods: ["GET", "POST", "DELETE", "PUT"],
//};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors(corsOptions));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../fitness-logger-frontend/build/index.html")));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../fitness-logger-frontend/build/index.html'));
});
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
