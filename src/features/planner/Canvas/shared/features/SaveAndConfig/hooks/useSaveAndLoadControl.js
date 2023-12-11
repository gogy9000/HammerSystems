import {button, useControls,} from "leva";
import {loadConfig, saveConfig} from "../actions";
import {useDispatch} from "react-redux";
import {useRef} from "react";

export const useSaveAndLoadControl = () => {
    const ref = useRef(null)

    const dispatch = useDispatch();

    useControls(() => ({
        ['Сохранить файл']: button(() => {
            dispatch(saveConfig())
        }),
        ['Загрузить файл']: button(() => {
            ref.current.click()
        }),
    }),);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        dispatch(loadConfig(selectedFile))
    };
    return {ref, handleFileChange}
};