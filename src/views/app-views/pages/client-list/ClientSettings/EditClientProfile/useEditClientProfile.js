import {useParams} from "react-router-dom";
import {useClientQuery, usePatchClientMutation} from "../../../../../../features/clients/api";
import {Form, message} from "antd";

export const useEditClientProfile = () => {
    const {id} = useParams()
    const {data, isLoading} = useClientQuery({id}, {skip: !id})
    const [form] = Form.useForm();
    const [mutation, {isLoading: isPatchLoading}] = usePatchClientMutation()
    const onSubmit = async ({city, address, ...restValues}) => {
        console.log(restValues)
        const key = 'updatable';
        message.loading({content: 'Updating...', key});
        const res = await mutation({
            id,
            data: {
                address: {
                    city,
                    street: address
                },
                ...restValues
            }
        })
        if ('data' in res) {
            form.setFieldsValue({
                name: res.data.name,
                address: res.data.address.street,
                city: res.data.address.city,
                phone: res.data.phone,
                username: res.data.username,
                website: res.data.website
            })
        }
        message.success({content: 'Done!', key, duration: 2});
    }
    return {
        data, isLoading, onSubmit, isPatchLoading, form
    }
}