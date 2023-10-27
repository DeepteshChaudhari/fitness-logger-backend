import express from "express";
import path from "path";
import apiRoutes from './api/index.js'

const router = express.Router()
router.use("/api", apiRoutes);

// connect with react router
// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

export default router 
