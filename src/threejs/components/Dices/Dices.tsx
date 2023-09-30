import Dice from "./Dice/Dice";

const INITIAL_DICEPOSITIONS: [number, number, number][] = [
  [0, 1.5, 0],
  [-0.3, 0.5, 0.3],
  [0.3, 1, 0.3],
  [0, 1, -0.6],
  [0.6, 0.5, 0],
];

const Dices = () => {
  return (
    <group position={[1, 0, 0]}>
      {INITIAL_DICEPOSITIONS.map((position, index) => (
        <Dice key={index} id={index} position={position} />
      ))}
    </group>
  );
};

export default Dices;
