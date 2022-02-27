import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/images', (req, res) => {
  res.sendStatus(200);
});

export default apiRouter;
