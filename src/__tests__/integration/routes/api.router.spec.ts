import supertest from "supertest";

import app from "../../../app";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("GET /api/images with missing arguments produces 400 status code", async () => {
    const response = await request.get("/api/images");
    expect(response.status).toEqual(400);
  });

  xit("GET /api/images with correct arguments produces 200 status code", async () => {
    const response = await request.get(
      "/api/images?filename=fjord&width=200&height=200"
    );
    expect(response.status).toEqual(200);
  });

  xit("GET /api/images with correct arguments in a different order produces 200 status code", async () => {
    const response = await request.get(
      "/api/images?width=500&filename=palmtunnel&height=500"
    );
    expect(response.status).toEqual(200);
  });
});
