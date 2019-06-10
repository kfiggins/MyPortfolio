function outer() {
  let a = 2;
  function inner(b) {
    return a * b;
  }

  return inner;
}

// closures

describe("Closures are powerful!", () => {
  it("Retains access to outer scope", () => {
    let test = outer();
    let result = test(2);
    expect(result).toBe(4);
  });
});
