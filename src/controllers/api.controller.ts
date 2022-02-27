import path from 'path';

import { Request, Response } from 'express';
import sharp from 'sharp';

async function processImage(req: Request, res: Response) {
  const assetsDir = path.resolve(__dirname, '..', '..', 'assets');

  const filename = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  try {
    await sharp(`${assetsDir}/full/${filename}.jpg`)
      .resize(width, height)
      .toFile(`${assetsDir}/resized/${filename}-${width}x${height}.jpg`);

    res.sendFile(`${assetsDir}/resized/${filename}-${width}x${height}.jpg`);
  } catch (err) {
    res.status(500).json(err);
  }
}

export default { processImage };
