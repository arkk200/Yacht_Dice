import { statusAtom } from "@/store/status";
import { isAllDiceSleptAtom } from "@/threejs/store/isAllDiceSlept";
import { RapierRigidBody } from "@react-three/rapier";
import gsap from "gsap";
import { RefObject, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Vector3 } from "three";

const useRollDiceEffect = (rigidBodyRef: RefObject<RapierRigidBody>) => {
  const [status, setStatus] = useRecoilState(statusAtom);

  const isAllDiceSlept = useRecoilValue(isAllDiceSleptAtom);

  useEffect(() => {
    if (status === "주사위 굴리기") {
      const rigidBody = rigidBodyRef.current;

      if (!rigidBody) return;

      const curRotation = rigidBody.rotation();
      const curPosition = rigidBody.translation();

      const tl = gsap.timeline();

      tl.to(curRotation, {
        duration: 1,
        z: (Math.PI / 180) * 120,
        onUpdate() {
          rigidBody.setRotation(curRotation, true);
        },
      }).to(curPosition, {
        delay: 0.9,
        duration: 0.6,
        x: 4,
        z: 0,
        onUpdate() {
          const { x, y, z } = curPosition;
          rigidBody.setTranslation(new Vector3(x, y, z), true);
        },
      });
    }
  }, [rigidBodyRef, status, setStatus]);

  useEffect(() => {
    if (status === "주사위 굴리기" && isAllDiceSlept) {
      setStatus("주사위 눈금 보이기");
    }
  }, [status, setStatus, isAllDiceSlept]);
};

export default useRollDiceEffect;
