import Dice from "../Dice/Dice";

const Dices = () => {
  return (
    <group position={[1, 0, 0]}>
      <Dice position={[0, 1.5, 0]} />
      <Dice position={[-0.3, 0.5, 0.3]} />
      <Dice position={[0.3, 1, 0.3]} />
      <Dice position={[0, 1, -0.6]} />
      <Dice position={[0.6, 0.5, 0]} />
    </group>
  );
};

export default Dices;
