export const map = (fun: (x: number) => number) => {
  return (array: number[]) => {
    return array.reduce((accumulator: number[], item: number) => {
      return accumulator.concat(fun(item));
    }, []);
  };
};
