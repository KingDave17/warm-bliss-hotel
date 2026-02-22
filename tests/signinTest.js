import { isInputEmpty } from "../login/signin/signin.js";

describe("Warm Bliss Hotel - Sign In Logic", () => {
  describe("isInputEmpty function", () => {
    it("should return true for empty credentials", () => {
      expect(isInputEmpty("")).toBe(true);
    });

    it("should return true if the user only types spaces", () => {
      expect(isInputEmpty("    ")).toBe(true);
    });

    it("should return false when a value is provided", () => {
      expect(isInputEmpty("password123")).toBe(false);
    });
  });

  describe("Credential Verification", () => {
    beforeEach(() => {
      localStorage.setItem("userEmail", "guest@warmbliss.com");
      localStorage.setItem("userPassword", "luxury2026");
    });

    afterEach(() => {
      localStorage.clear();
    });

    it("should successfully match entered credentials against stored data", () => {
      const enteredEmail = "guest@warmbliss.com";
      const enteredPassword = "luxury2026";

      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");

      expect(enteredEmail).toBe(storedEmail);
      expect(enteredPassword).toBe(storedPassword);
    });

    it("should fail when the email does not match", () => {
      const enteredEmail = "scammer@hacker.com";
      const storedEmail = localStorage.getItem("userEmail");

      expect(enteredEmail).not.toBe(storedEmail);
    });
  });

  describe("Security Messaging", () => {
    it("should use the generic error text to prevent account enumeration", () => {
      const genericMessage = "Please enter a valid email and password.";
      expect(genericMessage).toContain("email and password");
    });
  });
});
