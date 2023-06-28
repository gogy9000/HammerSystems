import React, {useState} from 'react';
import {Form, Avatar, Button, Input, Row, Col, message, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'

const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

export const EditProfile = ({item, onSubmit, form, loading}) => {
    const [avatarUrl, setAvatarUrl] = useState('/img/avatars/thumb-6.jpg')

    const onFinish = values => {



            onSubmit(values)


    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onUploadAavater = info => {
        const key = 'updatable';
        if (info.file.status === 'uploading') {
            message.loading({content: 'Uploading...', key, duration: 1000});
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => {
                    setAvatarUrl(imageUrl)
                }
            );
            message.success({content: 'Uploaded!', key, duration: 1.5});
        }
    };

    const onRemoveAvater = () => {
        setAvatarUrl('')
    }

    return (
        <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
                <div className="ml-3 mt-md-0 mt-3">
                    <Upload onChange={onUploadAavater} withCredentials showUploadList={false} action={avatarEndpoint}>
                        <Button type="primary">Change Avatar</Button>
                    </Upload>
                    <Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
                </div>
            </Flex>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    form={form}
                    initialValues={
                        {
                            'name': item.name,
                            'email': item.email,
                            'username': item.username,
                            'phone': item.phone,
                            'website': item.website,
                            'address': item.address.street,
                            'city': item.address.city,

                        }
                    }
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phone"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button disabled={loading} loading={loading} type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )

}

