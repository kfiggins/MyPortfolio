// == vs ===

// === is Strict Equality
// Type and value have to be the same
describe("Testing ===", () => {
  it("should be true if same type and value", () => {
    expect(5 === 5).toBe(true);
    expect(5 === "5").toBe(false);
    expect("hello" === "hello").toBe(true);
    expect(null === null).toBe(true);
  });
});

describe("Testing ==", () => {
  it("Test the falsy values, false, 0 and '' ", () => {
    expect(false == 0).toBe(true);
    expect(0 == "").toBe(true);
    expect(false == "").toBe(true);
  });
  it("Test the falsy values, null and undefined", () => {
    expect(null == undefined).toBe(true);
    expect(null == null).toBe(true);
    expect(undefined == undefined).toBe(true);
  });
  it("Test the falsy value, NAN", () => {
    expect(null == NaN).toBe(false);
    expect(NaN == NaN).toBe(false);
    expect(undefined == NaN).toBe(false);
  });
});
