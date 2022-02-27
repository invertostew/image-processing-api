import express from 'express';

import validateImageQuery from '../middleware/validate-image.middleware';
import apiController from '../controllers/api.controller';

const apiRouter = express.Router();

apiRouter.get('/images', validateImageQuery, apiController.processImage);

export default apiRouter;
