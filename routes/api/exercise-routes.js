import express from "express";

const exerciseRoutes = express.Router()


import {
  createResistance,
  getResistanceById,
  deleteResistance,
} from "../../controllers/resistance-controller.js";

import {
  createCardio,
  getCardioById,
  deleteCardio,
} from "../../controllers/cardio-controller.js";

// import middleware
import auth from '../../utils/auth.js';

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
Router.use(auth);

// /api/exercise/cardio
router.route("/cardio").post(createCardio);

// /api/exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
router.route("/resistance").post(createResistance);

// /api/exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

export default exerciseRoutes;
