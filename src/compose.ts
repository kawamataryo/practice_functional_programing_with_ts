export const compose = <T extends any, K extends any>(f: T, g: K) => {
  return (arg: any) => {
    return f(g(arg));
  };
};
