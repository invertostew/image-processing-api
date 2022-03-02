import path from "path";
import fs, { promises as fsPromises } from "fs";

import supertest from "supertest";

import app from "../../../app";

const request = supertest(app);

describe("processImage", () => {
  describe("the filename doesn't exist in assets/full", () => {
    it("returns a 500 internal server error", async (): Promise<void> => {
      const response = await request.get(
        "/api/images?filename=random&height=200&width=200"
      );
      expect(response.status).toEqual(500);
    });
  });

  describe("the filename does exist in assets/full", () => {
    let testImage: string;
    beforeEach(async (): Promise<void> => {
      testImage = path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "assets",
        "resized",
        "fjord-250x250.jpg"
      );

      if (fs.existsSync(testImage)) {
        await fsPromises.unlink(testImage);
      }
    });

    it("generates the image in assets/resized", async (): Promise<void> => {
      const response = await request.get(
        "/api/images?height=250&filename=fjord&width=250"
      );
      expect(response.status).toEqual(200);
      expect(fs.existsSync(testImage)).toBeTrue();
    });
  });
});
