import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";

export const useCustomDrag = (callBack, config) => {
  const { size, viewport, camera,get } = useThree();

  const { factor } = viewport.getCurrentViewport();
    console.log(viewport.getCurrentViewport().top)
  return  useDrag(
    ({xy:[x,y],offset, ...rest}) => {
      const cameraPosition = Object.values(camera.position);
      const xPosition = ((x - get().size.width / 2) / factor) + cameraPosition[0] ;
      const yPosition = (-(y - get().size.height / 2) / factor) + cameraPosition[1] ;
        console.log(yPosition)
      callBack({xy:[xPosition,yPosition],...rest})
    },{filterTaps:true,
      ...config}
  );
};