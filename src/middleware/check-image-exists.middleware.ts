import path from "path";
import fs from "fs";

import { Request, Response, NextFunction } from "express";

function checkImageExists(req: Request, res: Response, next: NextFunction) {
  const { filename, width, height } = req.query;
  const resizedImage = path.resolve(
    __dirname,
    "..",
    "..",
    "assets",
    "resized",
    `${filename}-${width}x${height}.jpg`
  );

  if (fs.existsSync(resizedImage)) {
    return res.sendFile(resizedImage);
  }

  next();
}

export default checkImageExists;
