import { isEmpty, isCheckOutValid, getTodayDate } from "../form/form.js";

describe("Warm Bliss Hotel - Booking Form Logic", () => {
  describe("isEmpty function", () => {
    it("should return true if a string is empty", () => {
      expect(isEmpty("")).toBe(true);
    });

    it("should return true if a string contains only spaces", () => {
      expect(isEmpty("   ")).toBe(true);
    });

    it("should return false if a string has content", () => {
      expect(isEmpty("John Doe")).toBe(false);
    });
  });

  describe("isCheckOutValid function", () => {
    it("should return true if check-out is after check-in", () => {
      const checkIn = "2026-12-01";
      const checkOut = "2026-12-05";
      expect(isCheckOutValid(checkIn, checkOut)).toBe(true);
    });

    it("should return false if check-out is the same as check-in", () => {
      const checkIn = "2026-12-01";
      const checkOut = "2026-12-01";
      expect(isCheckOutValid(checkIn, checkOut)).toBe(false);
    });

    it("should return false if check-out is before check-in", () => {
      const checkIn = "2026-12-10";
      const checkOut = "2026-12-05";
      expect(isCheckOutValid(checkIn, checkOut)).toBe(false);
    });
  });

  describe("getTodayDate function", () => {
    it("should return a string in YYYY-MM-DD format", () => {
      const today = getTodayDate();

      expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});
