import { createUser, login, getSingleUser } from "../../controllers/user-controller.js";
import express from "express";
const userRouter = express.Router()

// import middleware
import authMiddleware from "../../utils/auth.js";

// put authMiddleware anywhere we need to send a token for verification of user
// /api/user for user signup
userRouter.route("/").post(createUser)

// /api/user/login for user login
userRouter.route("/login").post(login);

// /api/user/me to get single user data
userRouter.route('/me').get(authMiddleware, getSingleUser);

export default userRouter;
