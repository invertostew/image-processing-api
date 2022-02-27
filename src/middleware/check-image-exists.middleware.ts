import path from 'path';
import fs from 'fs';

import { Request, Response, NextFunction } from 'express';

function checkImageExists(req: Request, res: Response, next: NextFunction) {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;

  const filePath = path.resolve(__dirname, '..', '..', 'assets', 'resized', `${filename}-${width}x${height}.jpg`);

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    return res.sendFile(filePath);
  }

  next();
}

export default checkImageExists;
