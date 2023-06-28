import React, {memo} from 'react'
import UserList from "../../../../components/shared-components/UserList";
import {useClients} from "./useClients";

const ClientList = memo(() => {
    const {users, isLoading, onHandleRow} = useClients()
    return (
        <UserList users={users} isLoading={isLoading} onHandleRow={onHandleRow}/>
    )
})
export default ClientList