import sharpImageProcessing from "../../helpers/sharp-image-processing";

describe("sharpImageProcessing", (): void => {
  it("does not throw an error", async (): Promise<void> => {
    expect(async () => {
      await sharpImageProcessing("fjord", 200, 200);
    }).not.toThrow();
  });
});
