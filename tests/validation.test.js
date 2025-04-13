import { expect, test, describe } from "vitest";
import {
  validateEmail,
  validateLoginForm,
  validatePassword,
} from "../js/utils/validation.js";

describe("validateEmail function", () => {
  test("should return true for valid noroff.no emails", () => {
    //Arrange: Set up valid noroff.no test emails
    const validEmails = [
      "test@noroff.no",
      "student@stud.noroff.no",
      "james.bond@noroff.no",
      "jane.doe@stud.noroff.no",
    ];

    // Act & Assert: Test all valid emails
    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  test("should return false for invalid emails or non-noroff domains", () => {
    //Arrange: Set up invalid emails
    const invalidEmails = [
      "testingtesting@gmail.com",
      "student@noroff.com",
      "bjarne@stud.noroff",
      "noroff.no",
      "@noroff.no",
      "test@",
      "",
    ];

    //Act & Assert: Test all invalid emails
    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });
});

describe("validatePassword function", () => {
  test("should return true for passwords with 8 or more characters", () => {
    //Arrange: setup valid test passwords
    const validPasswords = [
      "12345678",
      "abcdefgh",
      "11111111",
      "abc12345",
      "a very long password",
    ];

    //Act & Assert: test all valid passwords
    validPasswords.forEach((password) => {
      expect(validatePassword(password)).toBe(true);
    });
  });

  test("should return false for passwords with less than 8 characters", () => {
    //Arrange
    const invalidPasswords = ["1234567", "shorty", "a", ""];

    //Act & Assert
    invalidPasswords.forEach((password) => {
      expect(validatePassword(password)).toBe(false);
    });
  });
});

describe("validateLoginForm function", () => {
  test("should return isValid true when both email and password are valid", () => {
    //Arrange
    const email = "test@noroff.no";
    const password = "password123";

    //Act
    const result = validateLoginForm(email, password);

    //Assert
    expect(result.isValid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test("should return validation errors when email is invalid", () => {
    //Arrange
    const email = "invalid@online.net";
    const password = "password123";

    //Act
    const result = validateLoginForm(email, password);

    //Assert
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(1);
    expect(result.errors[0]).toContain("noroff.no");
  });

  test("should return validation errors when password is too short", () => {
    //Arrange
    const email = "test@noroff.no";
    const password = "shorty";

    //Act
    const result = validateLoginForm(email, password);

    //Assert
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(1);
    expect(result.errors[0]).toContain("8 characters");
  });

  test("should return multiple validation errors when both inputs are invalid", () => {
    //Arrange
    const email = "invalid@gmail.com";
    const password = "123";

    //Act
    const result = validateLoginForm(email, password);

    //Assert
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(2);
  });
});
