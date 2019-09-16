import { add } from "./add";
import { times } from "./times";

export const multiply = (x: number, y: number) => {
  return times(x, add, y, 0);
};
