import React, { FC } from 'react'
import { User } from '../data/data'

export interface FollowersProps {
    followersData?: User | any;
    followersCount?: number
}

const Followers: FC<FollowersProps> = ({ followersData, followersCount }): JSX.Element => {
    return (
        <div>
            <div>
                {followersCount && <p>Top 5 followers of {followersCount}</p>}
            </div>
            {followersData &&
                followersData.slice(0, 5).map((follower: User, index: number) => (
                    <React.Fragment key={index}>
                        <li >
                            {follower.login}
                        </li>
                    </React.Fragment>
                ))}
        </div>)
}

export default Followers