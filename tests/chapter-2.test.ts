import { sum } from "../src/sum";
import { product } from "../src/product";
import { suc } from "../src/suc";
import { map } from "../src/map";
import { prev } from "../src/prev";
import { allWaysOne } from "../src/constant";
import { length } from "../src/length";

describe("chapter 1", () => {
  test("sum", () => {
    expect(sum([1, 3, 4, 5])).toBe(13);
  });

  test("product", () => {
    expect(product([1, 3, 4, 5])).toBe(60);
  });

  test("map", () => {
    expect(map(suc)([1, 3, 4, 5])).toStrictEqual([2, 4, 5, 6]);
    expect(map(prev)([1, 3, 4, 5])).toStrictEqual([0, 2, 3, 4]);
  });

  test("allWaysOne", () => {
    expect(map(allWaysOne)([1, 3, 4, 5])).toStrictEqual([1, 1, 1, 1]);
  });

  test("length", () => {
    expect(length([1, 3, 4, 5])).toBe(4);
  });
});
