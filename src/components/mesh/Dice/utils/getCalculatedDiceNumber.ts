const getCalculatedDiceNumber = (x: number, y: number, z: number): number => {
  const eps = 0.1;
  const isZero = (angle: number) => Math.abs(angle) < eps;
  const isHalfPi = (angle: number) => Math.abs(angle - 0.5 * Math.PI) < eps;
  const isMinusHalfPi = (angle: number) =>
    Math.abs(0.5 * Math.PI + angle) < eps;
  const isPiOrMinusPi = (angle: number) =>
    Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;

  console.log(x.toFixed(4), y.toFixed(4), z.toFixed(4));

  switch (true) {
    case (isZero(z) && isZero(x)) || (isPiOrMinusPi(z) && isPiOrMinusPi(x)):
      return 1;
    case (isZero(x) && isHalfPi(z)) || (isPiOrMinusPi(x) && isMinusHalfPi(z)):
      return 2;
    case (isMinusHalfPi(x) && isZero(y)) || (isHalfPi(x) && isPiOrMinusPi(y)):
      return 3;
    case (isHalfPi(x) && isZero(y)) || (isMinusHalfPi(x) && isPiOrMinusPi(y)):
      return 4;
    case (isZero(x) && isMinusHalfPi(z)) || (isPiOrMinusPi(x) && isHalfPi(z)):
      return 5;
    default:
      return 6;
  }
};

export default getCalculatedDiceNumber;
