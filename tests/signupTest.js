import {
  isInputEmpty,
  isValidEmail,
  getSigninPath,
} from "../login/signup/signup.js";

describe("Warm Bliss Hotel - Registration Logic & Validation", () => {
  describe("isInputEmpty function", () => {
    it("should return true for a completely empty string", () => {
      expect(isInputEmpty("")).toBe(true);
    });

    it("should return true for strings that only contain spaces", () => {
      expect(isInputEmpty("   ")).toBe(true);
    });

    it("should return false when text is provided", () => {
      expect(isInputEmpty("Babcock Student")).toBe(false);
    });
  });

  describe("isValidEmail function", () => {
    it("should return true for a standard email (user@domain.com)", () => {
      expect(isValidEmail("guest@warmbliss.com")).toBe(true);
    });

    it("should return true for educational domains", () => {
      expect(isValidEmail("student@babcock.edu.ng")).toBe(true);
    });

    it("should return false for emails missing the '@' symbol", () => {
      expect(isValidEmail("guestwarmbliss.com")).toBe(false);
    });

    it("should return false for emails missing a top-level domain (like .com or .ng)", () => {
      expect(isValidEmail("guest@warmbliss")).toBe(false);
    });

    it("should return false for strings that are not emails at all", () => {
      expect(isValidEmail("not-an-email")).toBe(false);
    });
  });

  describe("getSigninPath function", () => {
    it("should point to the correct relative path for the sign-in page", () => {
      expect(getSigninPath()).toBe("../signin/signin.html");
    });
  });

  describe("LocalStorage Data Handling", () => {
    it("should correctly store and retrieve user credentials", () => {
      const testEmail = "test@babcock.edu.ng";
      localStorage.setItem("userEmail", testEmail);

      expect(localStorage.getItem("userEmail")).toBe(testEmail);

      localStorage.removeItem("userEmail");
    });
  });
});
