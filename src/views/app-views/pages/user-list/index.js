import React, {memo} from 'react'
import UserList from "../../../../components/shared-components/UserList";
import userData from "assets/data/user-list.data.json";
import {useClientsQuery} from "../../../../features/clients/api";



const ClientList = memo(() => {
    const res=useClientsQuery()
    console.log(res)
    return (
        <UserList users={userData}/>
    )
})
export default ClientList