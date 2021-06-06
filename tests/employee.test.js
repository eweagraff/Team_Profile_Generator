const Employee = require("../lib/employee");

describe("Employee", () => {
  it("it will return a name when created", () => {
    const testName = "Emily";
    const obj = new Employee(testName, 1, "bob@bob.com");
    expect(obj.name).toEqual(testName);
  });

  it("it will return a name when called", () => {
    const testName = "Emily";
    const obj = new Employee(testName, 1, "test@test.com");
    expect(obj.getName()).toEqual(testName);
  });

  //
  it("it will return an id when created", () => {
    const testId = 1;
    const obj = new Employee("emily", testId, "bob@bob.com");
    expect(obj.id).toEqual(testId);
  });

  it("it will return a id when called", () => {
    const testId = 1;
    const obj = new Employee("emily", testId, "test@test.com");
    expect(obj.getId()).toEqual(testId);
  });
  it("it will return an email when created", () => {
    const testEmail = "test@test.com";
    const obj = new Employee("emily", 1, testEmail);
    expect(obj.email).toEqual(testEmail);
  });

  it("it will return an email when called", () => {
    const testEmail = "test@test.com";
    const obj = new Employee("emily", 1, testEmail);
    expect(obj.getEmail()).toEqual(testEmail);
  });
  it("it will return the employee role when tested", () => {
    const testRole = "Employee";
    const obj = new Employee("emily", 1, testRole);
    expect("Employee").toEqual(testRole);
  });
});
