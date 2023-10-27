import express from "express";

const apiRoutes = express.Router()

import exerciseRoutes from "../api/exercise-routes.js";
import userRoutes from "../api/user-routes.js";

router.use("/user", userRoutes);
router.use("/exercise", exerciseRoutes);

export default apiRoutes;
