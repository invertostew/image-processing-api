import supertest from "supertest";

import app from "../../../app";

const request = supertest(app);

describe("checkImageExists", () => {
  describe("fulfilled promise", () => {
    xit("", async () => {
      const response = await request.get("/api/images");
      expect(response.status).toEqual(200);
    });
  });

  describe("catch error", () => {
    xit("", async () => {
      const response = await request.get("/api/images");
      expect(response.status).toEqual(200);
    });
  });
});
