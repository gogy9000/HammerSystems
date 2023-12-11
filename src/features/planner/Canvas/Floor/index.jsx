import React, { memo } from "react";
import { Grid } from "@react-three/drei";
import { Plane } from "../meshes/Plane";
import { addWall } from "../Constructions/slice";
import { selectMode } from "../shared/sharedSlice/selectors";
import { addFurniture } from "../Furniture/slice";
import {useDispatch, useSelector} from "react-redux";

export const Floor = memo(() => {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();
  const onDoubleClick = (e) => {
    const [x,y,z] = Object.values(e.point);
    if (mode === "construction") {
      dispatch(addWall({ position:[x,y,z] }));
      return;
    }
    if (mode === "furniture") {
      // alert('здесь должна была рендерится 3D модель стола со стульями,' +
      //     ' но я не смог победить этот моковый сервер, который блокирует реквесты к статике ...')
      dispatch(addFurniture({ position:[x,y,1] }));
    }
  };

  return (
    <>
      <Grid args={[100, 100]} position={[0, 0, -0.49]} rotation={[Math.PI / 2, 0, 0]}/>
      <Plane
        meshProps={{
          onDoubleClick
        }}
        cannonProps={
          {
            position: [0, 0, -0.5],
            args: [100, 100],
            rotation: [0, 0, Math.PI / 2]
          }
        }

      />
    </>
  );
});