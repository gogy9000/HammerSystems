import React, { memo, useEffect, } from "react";
import {  useBox } from "@react-three/cannon";

import {  useDragPhysicsObject } from "../../shared/hooks/useDragPhysicsObject";


export const Block = memo(({ onFinishDrag, meshProps, geometryProps, materialProps,enable=false }) => {
    const {onClick:onHandleClick,...restMeshProps}=meshProps||{}
  const [ref, api] = useBox(() => ({
    mass:1,
    type:"Kinematic",
    ...geometryProps
  }));

  useEffect(() => {
    if (!geometryProps) return;
    if (!geometryProps.rotation) return;
    const [x, y, z] = geometryProps.rotation;
    api.rotation.set(x, y, z);
  }, [geometryProps?.rotation]);

  const z=geometryProps&&geometryProps.position?geometryProps.position[2]:0.5

  const bind= useDragPhysicsObject({
    api,
    onFinishDrag,
    z,
    config:{
      from:()=>[ref.current?.position.x ,ref.current?.position.y],
      enabled:enable

    }
  }
  )
  const {onClick, ...rest}=bind()

  return (

    <mesh
      ref={ref}
      onClick={(e)=>{
        onHandleClick&&onHandleClick(e)
        onClick&& onClick(e)
      }}
      {...restMeshProps}
      {...rest}
    >
      <boxGeometry  {...geometryProps}/>
      <meshStandardMaterial  attach={"material"} color={"gray"} {...materialProps}/>
    </mesh>
  );
});