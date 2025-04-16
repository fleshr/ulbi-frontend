import { classNames } from "./classNames";

describe("classNames", () => {
  it("only first param", () => {
    const classes = classNames("testClass", {}, []);
    expect(classes).toBe("testClass");
  });

  it("with additionals", () => {
    const classes = classNames("testClass", {}, ["additionalClass", undefined]);
    expect(classes).toBe("testClass additionalClass");
  });

  it("with mods", () => {
    const classes = classNames("testClass", { mod1: true, mod2: false }, []);
    expect(classes).toBe("testClass mod1");
  });

  it("with mods and additionals", () => {
    const classes = classNames("testClass", { mod1: true, mod2: false }, [
      "additionalClass",
      undefined,
    ]);
    expect(classes).toBe("testClass additionalClass mod1");
  });
});
