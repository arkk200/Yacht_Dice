import { Cylinder } from "@react-three/drei";

const DiceCupFloor = () => {
  return (
    <Cylinder args={[1.4, 1.4, 0.1, 20]}>
      <meshStandardMaterial />
    </Cylinder>
  );
};

export default DiceCupFloor;
