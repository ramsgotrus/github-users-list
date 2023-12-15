import React, { FC } from 'react'
import { Avatar } from '../../../components/index'
import { User as userData } from '../../../data/data'
import '../UserStyles.css'

export interface UserProps {
    className?: string;
    userData?: userData | any;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const User: FC<UserProps> = ({ userData, onClick }): JSX.Element => {
    const handleSubmission = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault()
        onClick && onClick(event)
    }
    const { id, avatar_url, login } = userData
    return (<Avatar className='card' imgSource={avatar_url} imgClass='image' displayName={login} id={id} onClick={handleSubmission} />)
}

export default User