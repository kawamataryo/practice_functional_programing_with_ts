const constant = (any: number) => {
  return (_: number) => any;
};
export const allWaysOne = constant(1);
