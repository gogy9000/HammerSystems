import { button, useControls, } from "leva";
import {loadConfig, saveConfig} from "../actions";
import { useDispatch } from "react-redux";
import {useRef} from "react";

export const useSaveControl = () => {
  const ref= useRef(null)

  const dispatch = useDispatch();

  useControls(()=>({
    ['Сохранить']:button(()=>{
      dispatch(saveConfig())
    }),
    ['upload']:button(()=>{
      ref.current.click()
    }),
  }),);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    dispatch(loadConfig(selectedFile))
  };
  return {ref,handleFileChange}
};