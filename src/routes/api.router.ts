import express from 'express';

import validateImageQuery from '../middleware/validate-image-query.middleware';
import checkImageExists from '../middleware/check-image-exists.middleware';
import apiController from '../controllers/api.controller';

const apiRouter = express.Router();

apiRouter.get('/images', validateImageQuery, checkImageExists, apiController.processImage);

export default apiRouter;
