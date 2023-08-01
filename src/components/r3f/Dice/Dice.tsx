import {
  DicesNumber,
  DicesSlept,
  dicesNumberState,
  dicesSleptState,
  gameStatusState,
} from "@/stores/game.store";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DoubleSide } from "three";
import useDiceGeometries from "./hooks/useDiceGeometries.hook";
import useGetDiceNumber from "./hooks/useGetDiceNumber";

interface Props {
  id: number;
  position: [number, number, number];
}

const Dice = ({ id, position }: Props) => {
  const rigidBodyRef = useRef<RapierRigidBody>(null);

  const gameStatus = useRecoilValue(gameStatusState);
  const setDicesSlept = useSetRecoilState(dicesSleptState);
  const setDicesNumber = useSetRecoilState(dicesNumberState);

  const { geometry, innerGeometry } = useMemo(useDiceGeometries, []);

  const { getDiceNumber } = useGetDiceNumber(rigidBodyRef);

  const handleDiceSlept = () => {
    if (gameStatus === "주사위굴리기") {
      rigidBodyRef.current?.sleep();
      setDicesSlept(
        (prev) =>
          [...prev.slice(0, id), true, ...prev.slice(id + 1)] as DicesSlept
      );
      setDicesNumber(
        (prev) =>
          [
            ...prev.slice(0, id),
            getDiceNumber(),
            ...prev.slice(id + 1),
          ] as DicesNumber
      );
    }
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
      onSleep={handleDiceSlept}
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
