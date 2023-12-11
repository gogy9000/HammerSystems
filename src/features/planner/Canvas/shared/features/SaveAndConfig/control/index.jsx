import {useSaveControl} from "../hooks/useSaveControl";

export const SaveControl = () => {
    const {ref, handleFileChange} = useSaveControl()
    return <>
        <input onChange={handleFileChange} ref={ref} type={'file'} hidden/>
    </>
}