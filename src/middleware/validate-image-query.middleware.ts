import { Request, Response, NextFunction } from 'express';

function validateImageQuery(req: Request, res: Response, next: NextFunction) {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height) {
    return res.status(400).json({
      error: 'Please provide "filename", "width" and "height" query parameters.'
    });
  }

  next();
}

export default validateImageQuery;
