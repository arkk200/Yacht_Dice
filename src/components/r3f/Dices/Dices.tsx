import { dicesNumberState, isAllDicesSleptState } from "@/stores/game.store";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Dice from "../Dice/Dice";

const Dices = () => {
  const dicesNumber = useRecoilValue(dicesNumberState);
  const isAllDicesSlept = useRecoilValue(isAllDicesSleptState);

  useEffect(() => {
    if (isAllDicesSlept) {
      console.log("주사위 공중에 띄우기");
      console.log(dicesNumber);
    }
  }, [isAllDicesSlept, dicesNumber]);

  return (
    <group position={[1, 0, 0]}>
      <Dice id={0} position={[0, 1.5, 0]} />
      <Dice id={1} position={[-0.3, 0.5, 0.3]} />
      <Dice id={2} position={[0.3, 1, 0.3]} />
      <Dice id={3} position={[0, 1, -0.6]} />
      <Dice id={4} position={[0.6, 0.5, 0]} />
    </group>
  );
};

export default Dices;
