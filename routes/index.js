const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api/index");

router.use("/api", apiRoutes);

// connect with react router
// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

module.exports = router;
