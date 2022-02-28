import express from "express";

import validateImageQuery from "../middleware/validate-image-query.middleware";
import checkImageExists from "../middleware/check-image-exists.middleware";
import apiController from "../controllers/api.controller";

const apiRouter = express.Router();

const apiMiddleware = [validateImageQuery, checkImageExists];

apiRouter.get("/images", apiMiddleware, apiController.processImage);

export default apiRouter;
