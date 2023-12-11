import React, { memo } from "react";
import { useToggleModeControl } from "./hooks/useToggleModeControl";


export const ModeControl = memo(() => {
  useToggleModeControl()
  return (
    <></>
  );
});