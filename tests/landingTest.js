import {
  getStarColor,
  getHamburgerIcon,
  isReviewValid,
} from "../landing/index.js";

describe("Warm Bliss Hotel - Landing Page Logic", () => {
  describe("getStarColor function", () => {
    it("should return Gold (#f5a623) if the current star is less than or equal to the selected index", () => {
      const color = getStarColor(1, 3);
      expect(color).toBe("#f5a623");
    });

    it("should return Grey (#ccc) if the current star is greater than the selected index", () => {
      const color = getStarColor(4, 2);
      expect(color).toBe("#ccc");
    });
  });

  describe("getHamburgerIcon function", () => {
    it("should return the '✕' icon when the menu is active", () => {
      expect(getHamburgerIcon(true)).toBe("✕");
    });

    it("should return the '☰' icon when the menu is inactive", () => {
      expect(getHamburgerIcon(false)).toBe("☰");
    });
  });

  describe("isReviewValid function", () => {
    it("should return false if the review text is empty", () => {
      const result = isReviewValid("", { value: "5" });
      expect(result).toBe(false);
    });

    it("should return false if no rating is selected", () => {
      const result = isReviewValid("Great stay!", null);
      expect(result).toBe(false);
    });

    it("should return true if both text and rating are provided", () => {
      const result = isReviewValid("Amazing service!", { value: "5" });
      expect(result).toBe(true);
    });
  });
});
