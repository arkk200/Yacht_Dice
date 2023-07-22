import { useMemo } from "react";
import { getDiceGeometry, getDiceInnerGeometry } from "./utils/getDiceGeometry";
import { DoubleSide } from "three";
import { RigidBody } from "@react-three/rapier";

interface PropTypes {
  position: [number, number, number];
}

const Dice = ({ position }: PropTypes) => {
  const geometry = useMemo(getDiceGeometry, []);
  const innerGeometry = useMemo(getDiceInnerGeometry, []);
  return (
    <RigidBody colliders="cuboid" restitution={0.5} position={position}>
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
