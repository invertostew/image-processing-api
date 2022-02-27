import { Request, Response, NextFunction } from 'express';

function validateImageQuery(req: Request, res: Response, next: NextFunction) {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height) {
    return res.status(400).json({ error: 'Please ensure you have provided a filename, width and height.' });
  }

  next();
}

export default validateImageQuery;
