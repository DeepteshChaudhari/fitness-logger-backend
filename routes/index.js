
const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Serve up the React front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"), (err) => {
    if (err) {
      // Handle the error here, for example, send a 500 Internal Server Error response.
      res.status(500).send("Internal Server Error");
    }
  });
});

module.exports = router;

