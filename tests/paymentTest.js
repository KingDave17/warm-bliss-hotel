import {
  formatCardNumber,
  formatExpiryDate,
  isFieldEmpty,
  roomPrices,
} from "../payment/payment2.js";

describe("Warm Bliss Hotel - Payment Verification", () => {
  describe("formatCardNumber function", () => {
    it("should group numbers into blocks of four with spaces", () => {
      const input = "1234567812345678";
      expect(formatCardNumber(input)).toBe("1234 5678 1234 5678");
    });

    it("should remove non-numeric characters before formatting", () => {
      const input = "1234-abcd-5678";
      expect(formatCardNumber(input)).toBe("1234 5678");
    });
  });

  describe("formatExpiryDate function", () => {
    it("should insert a slash after the second digit for MM/YY format", () => {
      const input = "1225";
      expect(formatExpiryDate(input)).toBe("12/25");
    });

    it("should return the raw input if it's 2 digits or fewer", () => {
      expect(formatExpiryDate("1")).toBe("1");
      expect(formatExpiryDate("12")).toBe("12");
    });
  });

  describe("isFieldEmpty function", () => {
    it("should return true for an empty string", () => {
      expect(isFieldEmpty("")).toBe(true);
    });

    it("should return true for strings containing only whitespace", () => {
      expect(isFieldEmpty("   ")).toBe(true);
    });

    it("should return false when text is provided", () => {
      expect(isFieldEmpty("John Doe")).toBe(false);
    });
  });

  describe("roomPrices data object", () => {
    it("should have the correct price string for Deluxe Room", () => {
      expect(roomPrices["Deluxe Room"]).toBe("₦90,000");
    });

    it("should have the correct price string for Family Suite", () => {
      expect(roomPrices["Family Suite"]).toBe("₦200,000");
    });
  });
});
