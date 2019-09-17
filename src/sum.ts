export const sum = (array: number[]): number => {
  return array.reduce((accumulator: number, current: number) => {
    return accumulator + current;
  }, 0);
};
