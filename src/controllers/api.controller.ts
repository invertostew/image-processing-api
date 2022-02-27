import { Request, Response } from 'express';

function processImage(req: Request, res: Response) {
  res.send('Hello');
}

export default { processImage };
