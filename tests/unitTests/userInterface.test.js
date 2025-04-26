import { describe, expect, it } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath function", () => {
  const testCases = [
    { href: "/about", currentPath: "/about", expected: true },
    { href: "/", currentPath: "/", expected: true },
    { href: "/about", currentPath: "/about/contact", expected: true },
    { href: "/", currentPath: "/index.html", expected: true },
    { href: "/about", currentPath: "/index.html", expected: false },
  ];

  testCases.forEach(({ href, currentPath, expected }) => {
    it(`returns ${expected} for href="${href}" and currentPath="${currentPath}"`, () => {
      const result = isActivePath(href, currentPath);
      expect(result).toBe(expected);
    });
  });
});
