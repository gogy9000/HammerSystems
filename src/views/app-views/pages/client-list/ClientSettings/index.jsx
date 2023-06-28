import React, {memo} from 'react'
import InnerAppLayout from "../../../../../layouts/inner-app-layout";
import {SettingOption} from "./SettingsOption";
import {SettingContent} from "./SettingsContent";

const ClientSettings = memo(() => {


    return (
        <InnerAppLayout
            sideContentWidth={320}
            sideContent={<SettingOption/>}
            mainContent={<SettingContent/>}
        />
    )
})
export default ClientSettings