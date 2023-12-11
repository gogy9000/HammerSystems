import { useCustomDrag } from "./useCustomDrag";

export const useDragPhysicsObject = ({ api, z, onFinishDrag,config }) => {

  return  useCustomDrag(({ xy, down, event }) => {
    const x=xy[0]
    const y=xy[1]
    const xRoundedPosition = Math.round(x);
    const yRoundedPosition = Math.round(y);
    if (down) {
      api.position.set(
        x, y, z
      );
      return;
    }
    api.position.set(
      xRoundedPosition,
      yRoundedPosition,
      z
    );
    onFinishDrag && onFinishDrag({
      id: event.eventObject.name,
      position: [
        xRoundedPosition,
        yRoundedPosition,
        z
      ]
    });
  }, config );
};