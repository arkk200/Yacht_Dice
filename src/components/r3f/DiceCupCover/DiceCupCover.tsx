import { Cylinder } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface PropTypes {
  position: [number, number, number];
}

const DiceCupCover = ({ position }: PropTypes) => {
  return (
    <RigidBody
      colliders="trimesh"
      type="kinematicPosition"
      position={position}
      ccd
    >
      <Cylinder args={[1.2, 1.2, 0.2, 128]} position={position}>
        <meshStandardMaterial transparent opacity={0} />
      </Cylinder>
    </RigidBody>
  );
};

export default DiceCupCover;
