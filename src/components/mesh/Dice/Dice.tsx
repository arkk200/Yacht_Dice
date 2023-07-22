import { useMemo } from "react";
import { getDiceGeometry, getDiceInnerGeometry } from "./utils/getDiceGeometry";
import { DoubleSide } from "three";
import { RigidBody } from "@react-three/rapier";

const Dice = () => {
  const geometry = useMemo(getDiceGeometry, []);
  const innerGeometry = useMemo(getDiceInnerGeometry, []);
  return (
    <RigidBody colliders="cuboid" restitution={0.1} position={[0, 1, 0]}>
      <group>
        <mesh geometry={geometry} />
        <mesh geometry={innerGeometry}>
          <meshStandardMaterial color={0x000000} side={DoubleSide} />
        </mesh>
      </group>
    </RigidBody>
  );
};

export default Dice;
