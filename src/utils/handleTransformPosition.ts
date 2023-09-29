type Position = { x: number; y: number };

export const handleTransformedPosition = (
  e: MouseEvent,
  center: Position | null,
  x: number,
  y: number
) => {
  if (!center) center = { x: e.clientX - x, y: e.clientY - y };

  x = e.clientX - center.x;
  y = e.clientY - center.y;

  const limitPosition = 150;

  if (Math.abs(x) > limitPosition) {
    center.x = e.clientX - limitPosition * Math.sign(x);
    x = Math.sign(x) * limitPosition;
  }
  if (Math.abs(y) > limitPosition) {
    center.y = e.clientY - limitPosition * Math.sign(y);
    y = Math.sign(y) * limitPosition;
  }

  return { center, x, y };
};
