import { buttonGroup, useControls } from "leva";
import { selectMode } from "../../../sharedSlice/selectors";
import { toggleMode } from "../actions";
import {useDispatch, useSelector} from "react-redux";

export const useToggleModeControl = () => {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  const [,set]=useControls(()=>({
    ["Режим"]:mode==="construction"?"Стены":"Мебель",
    " ":buttonGroup({
      ['Стены']: () => {
        set({ ["Режим"]:"Стены"});
        dispatch(toggleMode('construction'))
      },
      ['Мебель']: () => {
        set({ ["Режим"]: "Мебель" });
        dispatch(toggleMode('furniture'))
      },
    })

  }),[mode]);
};