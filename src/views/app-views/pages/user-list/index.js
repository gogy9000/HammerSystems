import React, {memo} from 'react'
import UserList from "../../../../components/shared-components/UserList";
import userData from "assets/data/user-list.data.json";



const ClientList = memo(() => {

    return (
        <UserList users={userData}/>
    )
})
export default ClientList