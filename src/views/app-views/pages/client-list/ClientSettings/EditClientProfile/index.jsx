import React, {memo} from 'react'
import {EditProfile} from "../../../../../../components/shared-components/UserSettings/EditProfile";
import Loading from "../../../../../../components/shared-components/Loading";

import {useEditClientProfile} from "./useEditClientProfile";



export const EditClientProfile = memo(() => {

    const {data, isLoading, onSubmit, isPatchLoading, form} = useEditClientProfile()

    if (isLoading) {
        return (
            <Loading/>
        )
    }
    if (data) {
        return (
            <EditProfile item={data} onSubmit={onSubmit} form={form} loading={isPatchLoading}/>
        )
    }
    return null
})