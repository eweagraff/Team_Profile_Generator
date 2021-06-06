const Manager = require("../lib/manager");

describe("Manager", () => {
  it("it will return an office number when called", () => {
    const testNumber = 123;
    const obj = new Manager("emily", 1, "test@test.com", testNumber);
    expect(obj.getofficeNumber()).toEqual(testNumber);
  });
  it("it will return employee role when called", () => {
    const testRole = "Manager";
    const obj = new Manager("emily", 1, "test@test.com", testRole);
    expect(obj.getRole()).toEqual(testRole);
  });
});
