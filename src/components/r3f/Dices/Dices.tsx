import Dice from "../Dice/Dice";

const Dices = () => {
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
