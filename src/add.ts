import { suc } from "./suc";
import { prev } from "./prev";

export const add = (x: number, y: number): number => {
  if (y < 1) {
    return x;
  }
  return add(suc(x), prev(y));
};
