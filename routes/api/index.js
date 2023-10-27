import express from "express";

const apiRoutes = express.Router()
import router from "../api/exercise-routes.js";
import router from "../api/user-routes.js";

router.use("/user", userRoutes);
router.use("/exercise", exerciseRoutes);

export default apiRoutes;
