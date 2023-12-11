import React, { memo } from "react";
import { usePlane } from "@react-three/cannon";

export const Plane = memo(({meshProps,geometryProps,cannonProps,materialProps}) => {
  const [ref] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, -0.5],
    ...cannonProps
  }));
  return (
    <mesh  ref={ref } {...meshProps}>
      <planeGeometry args={[100, 100]} {...geometryProps}/>
      <meshStandardMaterial attach={"material"} color={"rgba(5,5,5,1)"} {...materialProps}/>
    </mesh>
  );
});