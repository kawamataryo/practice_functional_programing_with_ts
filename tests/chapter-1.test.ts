import { suc } from "../src/suc";
import { prev } from "../src/prev";
import { add } from "../src/add";
import { times } from "../src/times";
import { multiply } from "../src/multiply";

describe("chapter 1", () => {
  test("succ", () => {
    expect(suc(1)).toBe(2);
  });

  test("prev", () => {
    expect(prev(1)).toBe(0);
  });

  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("times", () => {
    expect(times(4, add, 5, 0)).toBe(20);
  });

  test("multiply", () => {
    expect(multiply(2, 5)).toBe(10);
  });

});
