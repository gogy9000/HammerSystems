import {Navigate, Route, Routes} from "react-router-dom";
import ChangePassword from "../../../../../../components/shared-components/UserSettings/ChangePassword";
import Billing from "../../../../../../components/shared-components/UserSettings/Billing";
import Notification from "../../../../../../components/shared-components/UserSettings/Notification";
import {EditClientProfile} from "../EditClientProfile";


export const SettingContent = () => {

    return (
        <Routes>
            <Route path="edit-profile" element={<EditClientProfile />}/>
            <Route path="change-password" element={<ChangePassword/>}/>
            <Route path="billing" element={<Billing/>}/>
            <Route path="notification" element={<Notification/>}/>
            <Route path="*" element={<Navigate to="edit-profile" replace/>}/>
        </Routes>
    )
}