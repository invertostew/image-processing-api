import path from "path";
import fs from "fs";

import supertest from "supertest";

import app from "../../../app";

const request = supertest(app);

describe("Test endpoint responses", () => {
  describe("GET /api/images", () => {
    afterEach(() => {
      const testImage = path.resolve(
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
        fs.unlinkSync(testImage);
      }
    });

    it("GET /api/images with missing arguments produces 200 status code", async () => {
      const response = await request.get("/api/images");
      expect(response.status).toEqual(200);
    });
  
    it("GET /api/images with missing width produces 400 status code", async () => {
      const response = await request.get(
        "/api/images?filename=fjord"
      );
      expect(response.status).toEqual(400);
      expect(response.text).toEqual("Please append '&width=<WIDTH>' to the URL. Example: &width=500");
    });
  
    it("GET /api/images with missing height produces 400 status code", async () => {
      const response = await request.get(
        "/api/images?filename=fjord&width=500"
      );
      expect(response.status).toEqual(400);
      expect(response.text).toEqual("Please append '&height=<HEIGHT>' to the URL. Example: &height=500");
    });

    it("GET /api/images with correct arguments produces 200 status code", async () => {
      const response = await request.get(
        "/api/images?filename=fjord&width=250&height=250"
      );
      expect(response.status).toEqual(200);
    });

    it("GET /api/images with correct arguments (in random order) produces 200 status code", async () => {
      const response = await request.get(
        "/api/images?height=250&filename=fjord&width=250"
      );
      expect(response.status).toEqual(200);
    });
  });
});
