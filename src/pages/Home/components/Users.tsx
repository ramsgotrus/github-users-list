import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { User as usersData } from '../../../data/data'
import { ErrorBoundary, Loading } from '../../../components/index'
import { useGetUsers } from '../../../hooks/index'
import User from './User'

import '../UserStyles.css'

export interface Users {
    className?: string;
}

const Users: FC<Users> = (): JSX.Element => {

    const { users, isLoading, isError, errorMessage } = useGetUsers()
    const navigate = useNavigate()
    if (isLoading) return (<Loading />)

    if (isError) return (<ErrorBoundary errorMessage={errorMessage} />)
    
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        navigate(`/user/${event.currentTarget.id}`)
    }

    return (
        <React.Fragment>
            <div className='banner'>
                Github Users</div>
            <div className='users'>
                {users && users.map((item: usersData, index: number) => (
                    <User key={index} userData={item} onClick={handleClick} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Users