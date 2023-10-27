import express from "express";

const apiRoutes = express.Router()
import router from "../api/exercise-routes.js";
import userRouter from "../api/user-routes.js";

router.use("/user", userRouter);
router.use("/exercise", exerciseRoutes);

export default apiRoutes;
