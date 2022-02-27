import express from 'express';

import apiController from '../controllers/api.controller';

const apiRouter = express.Router();

apiRouter.get('/images', apiController.processImage);

export default apiRouter;
