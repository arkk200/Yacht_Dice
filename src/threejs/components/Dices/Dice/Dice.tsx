import { dicePipListAtom } from "@/threejs/store/dicePipList";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { DoubleSide } from "three";
import useDiceGeometries from "./hooks/useDiceGeometries.hook";
import getDiceNumberFrom from "./utils/getDiceNumberFrom";

interface Props {
  id: number;
  position: [number, number, number];
}

const Dice = ({ id, position }: Props) => {
  const rigidBodyRef = useRef<RapierRigidBody>(null);

  const { geometry, innerGeometry } = useMemo(useDiceGeometries, []);
  const setDicePipList = useSetRecoilState(dicePipListAtom);

  const onDiceSleep = () => {
    const number = getDiceNumberFrom(rigidBodyRef);
    setDicePipList((prev) => [
      ...prev.slice(0, id),
      number,
      ...prev.slice(id + 1),
    ]);
  };

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="cuboid"
      restitution={0.75}
      friction={0.1}
      position={position}
      scale={1}
      mass={100}
      onSleep={onDiceSleep}
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
