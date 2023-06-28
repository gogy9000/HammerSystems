import React, {Component} from 'react'
import {UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import {Link, Route, Navigate, useLocation, Routes} from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Billing from './Billing';
import Notification from './Notification';

const MenuItem = ({icon, path, label, globalPath}) => {

    return (
        <>
            {icon}
            <span>{label}</span>
            <Link to={`${globalPath}/${path}`}/>
        </>
    )
}

const SettingOption = ({globalPath}) => {

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
                    label: <MenuItem globalPath={globalPath} label="Edit Profile" icon={<UserOutlined/>}
                                     path="edit-profile"/>
                },
                {
                    key: 'change-password',
                    label: <MenuItem globalPath={globalPath} label="Change Password" icon={<LockOutlined/>}
                                     path="change-password"/>
                },
                {
                    key: 'billing',
                    label: <MenuItem globalPath={globalPath} label="Billing" icon={<CreditCardOutlined/>}
                                     path="billing"/>
                },
                {
                    key: 'notification',
                    label: <MenuItem globalPath={globalPath} label="Notification" icon={<BellOutlined/>}
                                     path="notification"/>
                },
            ]}
        />
    );
};

const SettingContent = ({item}) => {

    return (

        <Routes>
            <Route path="edit-profile" element={<EditProfile item={item}/>}/>
            <Route path="change-password" element={<ChangePassword/>}/>
            <Route path="billing" element={<Billing/>}/>
            <Route path="notification" element={<Notification/>}/>
            <Route path="*" element={<Navigate to="edit-profile" replace/>}/>
        </Routes>
    )
}

export class Setting extends Component {

    render() {
        const {globalPath, item} = this.props
        return (
            <InnerAppLayout
                sideContentWidth={320}
                sideContent={<SettingOption globalPath={globalPath}/>}
                mainContent={<SettingContent item={item}/>}
            />
        );
    }
}

export default Setting
