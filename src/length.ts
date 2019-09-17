import { allWaysOne } from "./constant";
import { sum } from "./sum";
import { compose } from "./compose";
import { map } from "./map";

export const length = (array: number[]) => {
  return compose(
    sum,
    map(allWaysOne)
  )(array);
};
