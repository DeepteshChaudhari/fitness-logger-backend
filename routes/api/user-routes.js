const { createUser, login, getSingleUser } = require("../../controllers/user-controller.js");
import express from "express";
const router = express.Router()

// import middleware
import authMiddleware from "../../utils/auth.js";

// put authMiddleware anywhere we need to send a token for verification of user
// /api/user for user signup
router.route("/").post(createUser)

// /api/user/login for user login
router.route("/login").post(login);

// /api/user/me to get single user data
router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
