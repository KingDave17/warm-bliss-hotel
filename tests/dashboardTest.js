import { getMenuDisplay, getNavigationPath } from "../dashboard/dashboard.js";

describe("Warm Bliss Hotel - Dashboard Logic", () => {
  describe("getMenuDisplay function", () => {
    it("should return 'none' when the current state is 'block'", () => {
      const result = getMenuDisplay("block");
      expect(result).toBe("none");
    });

    it("should return 'block' when the current state is 'none'", () => {
      const result = getMenuDisplay("none");
      expect(result).toBe("block");
    });

    it("should return 'block' if the current state is empty", () => {
      const result = getMenuDisplay("");
      expect(result).toBe("block");
    });
  });

  describe("getNavigationPath function", () => {
    it("should return the correct relative path to the booking form", () => {
      const expectedPath = "../form/form.html";
      expect(getNavigationPath()).toBe(expectedPath);
    });
  });
});
