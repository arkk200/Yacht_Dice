import { isAllDiceSleptAtom } from "@/threejs/store/isAllDiceSlept";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Dice from "./Dice/Dice";

const INITIAL_DICEPOSITIONS: [number, number, number][] = [
  [0, 1.5, 0],
  [-0.3, 0.5, 0.3],
  [0.3, 1, 0.3],
  [0, 1, -0.6],
  [0.6, 0.5, 0],
];

const Dices = () => {
  const [isSleepList, setIsSleepList] = useState(Array(5).fill(false));

  const setIsAllDiceSlept = useSetRecoilState(isAllDiceSleptAtom);

  useEffect(() => {
    if (isSleepList.every((isSleep) => isSleep)) {
      setIsAllDiceSlept(true);
    }
  }, [isSleepList, setIsAllDiceSlept]);

  return (
    <group position={[1, 0, 0]}>
      {INITIAL_DICEPOSITIONS.map((position, index) => (
        <Dice id={index} position={position} setIsSleepList={setIsSleepList} />
      ))}
    </group>
  );
};

export default Dices;
