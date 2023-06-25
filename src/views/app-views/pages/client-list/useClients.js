import {useClientsQuery} from "../../../../features/clients/api";
import {useMemo} from "react";
import usersData from '../../../../assets/data/user-list.data.json'

export const useClients = () => {

    const {users, isLoading} = useClientsQuery({}, {
        selectFromResult: ({data, isLoading}) => {

            const users = data?.map(({id, email, name}, index) => ({
                id,
                email,
                name,
                "img": usersData[index].img,
                "role": usersData[index].role,
                "lastOnline": usersData[index].lastOnline,
                "status": usersData[index].status,
                "personalInfo": {
                    "location": usersData[index].personalInfo.location,
                    "title": usersData[index].personalInfo.title,
                    "birthday": usersData[index].personalInfo.birthday,
                    "phoneNumber": usersData[index].personalInfo.phoneNumber,
                    "facebook": usersData[index].personalInfo.facebook,
                    "twitter": usersData[index].personalInfo.twitter,
                    "instagram": usersData[index].personalInfo.instagram,
                    "site": usersData[index].personalInfo.site
                }


            })) || undefined

            return {
                users,
                isLoading,
            }
        },
    })

    return useMemo(() => ({
        users,
        isLoading,
    }), [users, isLoading])

}