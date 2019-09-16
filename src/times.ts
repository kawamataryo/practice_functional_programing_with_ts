export const times = (
    count: number,
    fun: (x: number, y: number) => number,
    arg: number,
    memo: number
): number => {
  if (count > 1) {
    return times(count - 1, fun, arg, fun(memo, arg));
  }
  return fun(memo, arg);
};
