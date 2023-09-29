import { statusAtom } from "@/store/status";
import { RapierRigidBody } from "@react-three/rapier";
import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Vector3 } from "three";

const useRollDiceEffect = (rigidBodyRef: RefObject<RapierRigidBody>) => {
  const isShaking = useRef<boolean>(false);
  const [status, setStatus] = useRecoilState(statusAtom);
  useEffect(() => {
    const position = { x: 1.75, y: 1.5, z: 0 };
    let tl: ReturnType<GSAP["timeline"]> | null = null;

    const onKeydown = (e: KeyboardEvent) => {
      if (e.code !== "KeyD") return;
      if (tl) return;
      tl = gsap.timeline();
      tl.to(position, {
        x: "random(1.65, 1.85, 0.05)",
        y: "random(1.45, 1.55, 0.05)",
        z: "random(-0.1, 0.1, 0.05)",
        duration: 0.08,
        repeat: -1,
        repeatRefresh: true,
        onUpdate() {
          rigidBodyRef.current?.setNextKinematicTranslation(
            new Vector3(position.x, position.y, position.z)
          );
        },
      });
    };

    const onKeyup = (e: KeyboardEvent) => {
      if (e.code !== "KeyD") return;
      isShaking.current = false;

      tl?.pause();
      tl = null;
      setStatus("주사위 굴리기");
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("keyup", onKeyup);
    };

    if (status === "주사위 섞기") {
      window.addEventListener("keydown", onKeydown);
      window.addEventListener("keyup", onKeyup);
    }
  }, [rigidBodyRef, status, setStatus]);
};

export default useRollDiceEffect;
