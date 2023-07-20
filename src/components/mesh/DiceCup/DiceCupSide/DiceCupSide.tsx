import { useEffect, useState } from "react";
import { Path, Shape } from "three";

const extrudeSettings = {
  depth: 2,
  steps: 1,
  bevelEnabled: false,
  curveSegments: 10,
} as const;

const DiceCupSide = () => {
  const [arcShape, setArcShape] = useState<Shape>(new Shape());

  useEffect(() => {
    setArcShape(() => {
      const arcShape = new Shape();
      arcShape.absarc(0, 0, 1.4, 0, Math.PI * 2, false);
      const holePath = new Path();
      holePath.absarc(0, 0, 1.3, 0, Math.PI * 2, true);
      arcShape.holes.push(holePath);
      return arcShape;
    });
  }, []);

  return (
    <mesh rotation={[Math.PI / -2, 0, 0]} position={[0, 0.05, 0]}>
      <extrudeGeometry args={[arcShape, extrudeSettings]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default DiceCupSide;
