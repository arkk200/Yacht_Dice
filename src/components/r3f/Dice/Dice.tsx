import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { DoubleSide } from "three";
import useDiceGeometries from "./Dice.hooks";

interface PropTypes {
  position: [number, number, number];
}

const Dice = ({ position }: PropTypes) => {
  const { geometry, innerGeometry } = useMemo(useDiceGeometries, []);

  return (
    <RigidBody
      colliders="cuboid"
      restitution={0.75}
      position={position}
      friction={0}
    >
      <group>
        <mesh geometry={geometry} castShadow />
        <mesh geometry={innerGeometry}>
          <meshStandardMaterial color={0x000000} side={DoubleSide} />
        </mesh>
      </group>
    </RigidBody>
  );
};

export default Dice;
