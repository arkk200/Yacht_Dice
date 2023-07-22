import { useMemo } from "react";
import { getDiceGeometry, getDiceInnerGeometry } from "./utils/getDiceGeometry";
import { DoubleSide } from "three";

const Dice = () => {
  const geometry = useMemo(getDiceGeometry, []);
  const innerGeometry = useMemo(getDiceInnerGeometry, []);
  return (
    <group>
      <mesh geometry={geometry} />
      <mesh geometry={innerGeometry}>
        <meshStandardMaterial color={0x000000} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export default Dice;
