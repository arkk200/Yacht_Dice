import { statusAtom } from "@/store/status";
import { dicePipListAtom } from "@/threejs/store/dicePipList";
import { orderListAtom } from "@/threejs/store/order";
import { RapierRigidBody, RigidBody, euler, quat } from "@react-three/rapier";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
  const [dicePipList, setDicePipList] = useRecoilState(dicePipListAtom);
  const status = useRecoilValue(statusAtom);
  const orderList = useRecoilValue(orderListAtom);

  const onDiceSleep = () => {
    const number = getDiceNumberFrom(rigidBodyRef);
    setDicePipList((prev) => [
      ...prev.slice(0, id),
      number,
      ...prev.slice(id + 1),
    ]);
  };

  useEffect(() => {
    /* TODO :: 코드 다시 짜기 */
    if (status === "주사위 눈금 보이기") {
      const rigidBody = rigidBodyRef.current;
      if (!rigidBody) return;
      rigidBody.setEnabled(false);
      const order = orderList?.findIndex((order) => order === id);
      if (typeof order !== "number") return;

      const position = rigidBody.translation();
      const rotation = euler().setFromQuaternion(quat(rigidBody.rotation()));

      gsap.to(position, {
        x: (order - 2) * 0.75,
        y: 3,
        z: 0,
        delay: 0.05 * order,
        duration: 0.25,
        onUpdate() {
          rigidBody.setTranslation(position, true);
        },
      });

      const number = dicePipList[id];
      const nextRotationMap: Record<number, object> = {
        1: { y: 0 },
        2: { y: 0 },
        3: { z: 0 },
        4: { z: 0 },
        5: { y: 0 },
        6: { y: 0 },
      };

      gsap.to(rotation, {
        ...nextRotationMap[number],
        delay: 0.05 * order,
        duration: 0.25,
        onUpdate() {
          rigidBody.setRotation(quat().setFromEuler(rotation), true);
        },
      });
    }
  }, [id, status, orderList, dicePipList]);

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
