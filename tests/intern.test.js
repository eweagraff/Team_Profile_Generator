const Intern = require("../lib/intern");

describe("Intern", () => {
  it("it will return school name when called", () => {
    const testSchool = "SDSU";
    const obj = new Intern("emily", 1, "test@test.com", testSchool);
    expect(obj.getSchool()).toEqual(testSchool);
  });
  it("it will return employee role when called", () => {
    const testRole = "Intern";
    const obj = new Intern("emily", 1, "test@test.com", testRole);
    expect(obj.getRole()).toEqual(testRole);
  });
});
