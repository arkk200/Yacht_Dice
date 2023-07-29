import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { DoubleSide } from "three";
import useDiceGeometries from "./hooks/useDiceGeometries.hook";
// import useDiceGeometries from "./Dice.hooks";

interface PropTypes {
  position: [number, number, number];
}

const Dice = ({ position }: PropTypes) => {
  const { geometry, innerGeometry } = useMemo(useDiceGeometries, []);

  return (
    <RigidBody
      colliders="cuboid"
      restitution={0.75}
      friction={0.1}
      position={position}
      mass={100}
      ccd
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
