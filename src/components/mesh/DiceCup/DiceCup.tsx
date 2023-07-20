import DiceCupFloor from "./DiceCupFloor/DiceCupFloor";
import DiceCupSide from "./DiceCupSide/DiceCupSide";

const DiceCup = () => {
  return (
    <group>
      <DiceCupSide />
      <DiceCupFloor />
    </group>
  );
};

export default DiceCup;
