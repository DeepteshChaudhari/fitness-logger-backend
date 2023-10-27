import express from "express";

const exerciseRoutes = express.Router()


const {
  createResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/resistance-controller.js");

const {
  createCardio,
  getCardioById,
  deleteCardio,
} = require("../../controllers/cardio-controller.js");

// import middleware
const { authMiddleware } = require('../../utils/auth.js');

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.use(authMiddleware);

// /api/exercise/cardio
router.route("/cardio").post(createCardio);

// /api/exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
router.route("/resistance").post(createResistance);

// /api/exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

export default exerciseRoutes;
