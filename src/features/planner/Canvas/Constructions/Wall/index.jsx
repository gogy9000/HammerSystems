import React, { memo } from "react";
import { Block } from "../../meshes/Block";
import {useDispatch, useSelector} from "react-redux";
import { selectWall } from "../slice/selectors";
import { constructionsActions } from "../slice";
import  * as THREE from 'three'
import { selectMode } from "../../shared/sharedSlice/selectors";




export const Wall= memo(({ id }) => {
  const mode=useSelector(selectMode)
  const wall = useSelector(selectWall(id));
  const { position, rotation,args,isSelected } = wall;
  const dispatch = useDispatch();

  const onWheel = (e) => {
    if(mode==='construction') {
      if (e.deltaY > 0) {
        dispatch(constructionsActions.rotateWall({ id: e.eventObject.name, rotation: [0, 0, Math.PI / 10] }));

      } else {
        dispatch(constructionsActions.rotateWall({ id: e.eventObject.name, rotation: [0, 0, -Math.PI / 10] }));

      }
    }
  };


  const onFinishDrag = ({ id, position }) => {
    dispatch(constructionsActions.setWallPosition({
      id,
      position
    }));
  };

  const onClick = (event) => {
    if(mode==='construction'){
      event.stopPropagation();
      const id = event.eventObject.name;
      if (!id) return;
      dispatch(constructionsActions.setSelectedConstructionsId(id));
    }
  };


  const color=new THREE.Color(isSelected?"blue":"gray")
  return (
    <Block
      onFinishDrag={onFinishDrag}
      meshProps={{ name: id, onWheel,onClick }}
      geometryProps={{
        args, position, rotation
      }}
      materialProps={{color}}
      enable={mode==='construction'}
    />
  );
});