import { Request, Response } from 'express';
import sharp from 'sharp';

async function processImage(req: Request, res: Response) {
  const { filename, width, height } = req.query;

  res.send({ filename, width, height });
}

export default { processImage };
