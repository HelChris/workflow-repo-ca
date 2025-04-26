import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "tests/unitTests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    exclude: ["tests/e2eTests/**", "**/node_modules/**", "**/dist/**"],
  },
});
