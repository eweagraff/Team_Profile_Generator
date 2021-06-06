const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("it will return github when called", () => {
    const testGitHub = "eweagraff";
    const obj = new Engineer("emily", 1, "test@test.com", testGitHub);
    expect(obj.getGitHub()).toEqual(testGitHub);
  });
  it("it will return employee role when called", () => {
    const testRole = "Engineer";
    const obj = new Engineer("emily", 1, "test@test.com", testRole);
    expect(obj.getRole()).toEqual(testRole);
  });
});
