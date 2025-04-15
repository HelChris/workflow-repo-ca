import { expect, describe, it, beforeEach } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("Storage functions", () => {
  beforeEach(() => {
    //Create a simple object to store our data
    const storage = {};
    //Create mock versions of the localStorage methods we need
    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  describe("getUsername", () => {
    it("retrieves the username from the localstorage", () => {
      const testUser = { name: "bobby3" };
      //Set up - directly save a token to localStorage
      localStorage.setItem("user", JSON.stringify(testUser));
      const getUser = getUsername();
      expect(getUser).toBe("bobby3");
    });

    it("returns null when no token exists", () => {
      const user = getUsername();
      //will return null because beforeEach gives us a fresh empty storage
      expect(user).toBeNull();
    });
  });
});
