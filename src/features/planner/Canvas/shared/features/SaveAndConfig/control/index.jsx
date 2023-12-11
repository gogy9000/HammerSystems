import {useSaveAndLoadControl} from "../hooks/useSaveAndLoadControl";

export const SaveControl = () => {
    const {ref, handleFileChange} = useSaveAndLoadControl()
    return <>
        <input
            onChange={handleFileChange}
            ref={ref}
            type={'file'}
            hidden accept=".json"
        />
    </>
}