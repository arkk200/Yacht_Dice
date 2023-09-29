import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from "react";
import { DoubleSide } from "three";
import useDiceGeometries from "./hooks/useDiceGeometries.hook";

interface Props {
  id: number;
  position: [number, number, number];
}

const Dice = ({ position }: Props) => {
  const rigidBodyRef = useRef<RapierRigidBody>(null);

  const { geometry, innerGeometry } = useMemo(useDiceGeometries, []);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="cuboid"
      restitution={0.75}
      friction={0.1}
      position={position}
      scale={1}
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
