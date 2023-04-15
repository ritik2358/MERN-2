import React from 'react'
import UsersList from '../components/UsersList'


const Users = () => {
    const USERS = [
        { id: 'rits', name: 'Ritik', image: 'https://source.unsplash.com/C6oPXOatFD8', places: 3 }
    ]

    return <UsersList items={USERS} />
}

export default Users