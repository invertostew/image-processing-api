import path from "path";
import fs, { promises as fsPromises } from "fs";

import { Request, Response } from "express";
import sharp from "sharp";

async function processImage(req: Request, res: Response) {
  const { filename, width, height } = req.query;
  const resizedDir = path.resolve(__dirname, "..", "..", "assets", "resized");
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

  if (!fs.existsSync(resizedDir)) {
    await fsPromises.mkdir(
      path.join(__dirname, "..", "..", "assets", "resized")
    );
  }

  try {
    if (fs.existsSync(fullSizeImage)) {
      await sharp(fullSizeImage)
        .resize(Number(width), Number(height))
        .toFile(resizedImage);

      res.sendFile(resizedImage);
    } else {
      res.status(400).send("Sorry this file does not exist.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export default { processImage };
