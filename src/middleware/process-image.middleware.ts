import path from "path";
import fs, { promises as fsPromises } from "fs";

import { Request, Response, NextFunction } from "express";

import sharpImageProcessing from "../helpers/sharp-image-processing";

async function processImage(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> {
  const resizedDir = path.resolve(__dirname, "..", "..", "assets", "resized");

  if (!fs.existsSync(resizedDir)) {
    await fsPromises.mkdir(
      path.join(__dirname, "..", "..", "assets", "resized")
    );
  }

  const { filename, width, height } = req.query;

  try {
    const image = await sharpImageProcessing(
      filename as string,
      Number(width),
      Number(height)
    );

    if (!image) {
      return res.status(400).send("Sorry this file does not exist.");
    }

    res.locals.imageUrl = image;
  } catch (err) {
    return res.status(500).json(err);
  }

  next();
}

export default processImage;
