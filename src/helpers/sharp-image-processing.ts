import path from "path";
import fs from "fs";

import sharp from "sharp";

async function sharpImageProcessing(
  filename: string,
  width: number,
  height: number
): Promise<string | undefined> {
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

  if (!fs.existsSync(fullSizeImage)) {
    return;
  }

  await sharp(fullSizeImage).resize(width, height).toFile(resizedImage);

  return resizedImage;
}

export default sharpImageProcessing;
