// Values Type or Primitive types
// Boolean, null, Undefined, String, Number
// The variable "contains" the value.
// If you assign a variable to a new variable it creates a copy

describe("Testing out Value Types", () => {
  it("Should create a copy", () => {
    let a = 5;
    let b = a;
    // Change b to prove that it is just a copy.
    b = 4;
    expect(a).not.toBe(b);
  });
  it("Overwrites when assigning to new variable", () => {
    let a = "hello";
    a = "dude";
    expect(a).toBe("dude");
  });
});

describe("Testing out Reference types", () => {
  it("Modifies orginal array without reassigning.", () => {
    let a = [];
    a.push("Coding");
    a.push("is fun");

    expect(a[0]).toBe("Coding");
    expect(a[1]).toBe("is fun");
  });
  it("Changes both variables becuase it's a reference", () => {
    let a = ["Fun"];
    let b = a;
    // The .push() changes the original array
    // so both variables with that reference exepect it.
    b.push("Coding");
    expect(a).toBe(b);
    expect(a[1]).toBe(b[1]);
  });
});
