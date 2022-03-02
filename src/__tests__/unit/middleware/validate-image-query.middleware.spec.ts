import supertest from "supertest";

import app from "../../../app";

const request = supertest(app);

describe("validateImageQuery", () => {
  describe("missing width from query", () => {
    let response: supertest.Response;
    beforeEach(async (): Promise<void> => {
      response = await request.get("/api/images?filename=fjord");
    });

    it("GET /api/images with missing width produces 400 status code", (): void => {
      expect(response.status).toEqual(400);
      expect(response.text).toEqual(
        "Please append '&width=<WIDTH>' to the URL. Example: &width=500"
      );
    });

    it("GET /api/images with missing width produces a helpful error", (): void => {
      expect(response.text).toEqual(
        "Please append '&width=<WIDTH>' to the URL. Example: &width=500"
      );
    });
  });

  describe("missing height from query", () => {
    let response: supertest.Response;
    beforeEach(async (): Promise<void> => {
      response = await request.get("/api/images?filename=fjord&width=500");
    });

    it("GET /api/images with missing height produces 400 status code", (): void => {
      expect(response.status).toEqual(400);
    });

    it("GET /api/images with missing height produces a helpful error", (): void => {
      expect(response.text).toEqual(
        "Please append '&height=<HEIGHT>' to the URL. Example: &height=500"
      );
    });
  });
});
