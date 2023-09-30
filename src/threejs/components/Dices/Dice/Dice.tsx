import { statusAtom } from "@/store/status";
import { dicePipListAtom } from "@/threejs/store/dicePipList";
import { isSleptListAtom } from "@/threejs/store/isSleptList";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
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
  const [status] = useRecoilState(statusAtom);
  const setIsDiceSleptList = useSetRecoilState(isSleptListAtom);
  const setDicePipList = useSetRecoilState(dicePipListAtom);

  useEffect(() => {
    if (status === "주사위 눈금 보이기") {
      const number = getDiceNumberFrom(rigidBodyRef);
      setDicePipList((prev) => [
        ...prev.slice(0, id),
        number,
        ...prev.slice(id + 1),
      ]);
    }
  }, [id, status, setDicePipList]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="cuboid"
      restitution={0.75}
      friction={0.1}
      position={position}
      scale={1}
      mass={100}
      onSleep={() =>
        setIsDiceSleptList((prev) => [
          ...prev.slice(0, id),
          true,
          ...prev.slice(id + 1),
        ])
      }
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
