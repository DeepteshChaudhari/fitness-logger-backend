import express from "express";

const apiRoutes = express.Router()

import exerciseRoutes from "./exercise-routes";
import userRoutes from "./user-routes";

router.use("/user", userRoutes);
router.use("/exercise", exerciseRoutes);

export default apiRoutes;
