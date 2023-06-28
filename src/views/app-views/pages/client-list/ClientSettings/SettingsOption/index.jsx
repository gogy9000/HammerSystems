import {useLocation} from "react-router-dom";
import {Menu} from "antd";
import {BellOutlined, CreditCardOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";
import {MenuItem} from "./MenuItem";


export const SettingOption = () => {

    const location = useLocation();

    const locationPath = location.pathname.split('/')

    const currentpath = locationPath[locationPath.length - 1]

    return (
        <Menu
            mode="inline"
            selectedKeys={[currentpath]}
            items={[
                {
                    key: 'edit-profile',
                    label: <MenuItem  label="Edit Profile" icon={<UserOutlined/>}
                                     path="edit-profile"/>
                },
                {
                    key: 'change-password',
                    label: <MenuItem  label="Change Password" icon={<LockOutlined/>}
                                     path="change-password"/>
                },
                {
                    key: 'billing',
                    label: <MenuItem  label="Billing" icon={<CreditCardOutlined/>}
                                     path="billing"/>
                },
                {
                    key: 'notification',
                    label: <MenuItem  label="Notification" icon={<BellOutlined/>}
                                     path="notification"/>
                },
            ]}
        />
    );
};