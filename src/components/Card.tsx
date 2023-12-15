import React, { FC } from 'react'
import { User, Organization } from '../data/data'
import Avator from './Avatar';
import Details from './Details'
import Followers from './Followers'
import './Styles.css'

export interface CardProps {
    className?: string;
    repoData?: User | any;
    orgData?: Organization | any;
    followersData?: User | any;
    followersCount?: number
}

const Card: FC<CardProps> = ({ className, repoData, followersData, followersCount, orgData }): JSX.Element => {
    const { name, stargazers_count, watchers_count, language, owner, created_at, has_issues } = repoData
    const { id, avatar_url, login } = owner
    return (<div className='userDetailsCard'>
        <div className='detailsCard'>
            <Avator className='card' imgSource={avatar_url} imgClass='image' displayName={login} id={id} orgData={orgData}></Avator>
            {followersData && <Followers followersData={followersData} followersCount={followersCount} />}
        </div>
        <div className='repoDetails'>
            <Details name={name} stargazers_count={stargazers_count} watchers_count={watchers_count} language={language} created_at={created_at} has_issues={has_issues} />
        </div>

    </div>)
}

export default Card