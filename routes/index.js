const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api/index.js");

router.use("/api", apiRoutes);

// connect with react router
// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../fitness-logger-frontend/build"));
});

module.exports = router;
