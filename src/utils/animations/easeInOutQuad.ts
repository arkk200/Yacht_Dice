const easeInOutQuad = (x: number) => {
  return x < 0.5 ? 2 * x ** 2 : 1 - (-2 * x + 2) ** 2 / 2;
};

export default easeInOutQuad;
