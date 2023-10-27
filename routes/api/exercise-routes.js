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
import authMiddleware from '../../utils/auth.js';

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
exerciseRoutes.use(authMiddleware);

// /api/exercise/cardio
exerciseRoutes.route("/cardio").post(createCardio);

// /api/exercise/cardio/:id
exerciseRoutes.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
exerciseRoutes.route("/resistance").post(createResistance);

// /api/exercise/resistance/:id
exerciseRoutes.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

export default exerciseRoutes;
