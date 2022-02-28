import path from "path";

import { Request, Response } from "express";
import sharp from "sharp";

async function processImage(req: Request, res: Response) {
  const { filename, width, height } = req.query;
  const fullSizeImage = path.resolve(
    __dirname,
    "..",
    "..",
    "assets",
    "full",
    `${filename}.jpg`
  );
  const resizedImage = path.resolve(
    __dirname,
    "..",
    "..",
    "assets",
    "resized",
    `${filename}-${width}x${height}.jpg`
  );

  try {
    await sharp(fullSizeImage)
      .resize(Number(width), Number(height))
      .toFile(resizedImage);

    res.sendFile(resizedImage);
  } catch (err) {
    res.status(500).json(err);
  }
}

export default { processImage };
