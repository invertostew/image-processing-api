import supertest from "supertest";

import app from "../../../app";

const request = supertest(app);

describe("Test endpoint responses", () => {
  describe("GET /api/images", () => {
    it("GET /api/images with missing arguments produces 200 status code", async (): Promise<void> => {
      const response = await request.get("/api/images");
      expect(response.status).toEqual(200);
    });
  });
});
