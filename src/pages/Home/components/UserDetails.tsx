import React, { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { User, Repo } from '../../../data/data'
import { Card, ErrorBoundary, Loading } from '../../../components/index'
import { useGetUserRepos, useGetFollowers, useGetOrgs } from '../../../hooks/index'

import '../UserStyles.css'

export interface UserDetailsProps {
    className?: string;
    data?: User
}

const UserDetails: FC<UserDetailsProps> = ({ }): JSX.Element => {
    const { id: userName } = useParams()
    const navigate = useNavigate()
    const { orgs, isLoading: isGetOrgsLoading, isError: isGetOrgsError, errorMessage: getOrgErrorMessage } = useGetOrgs(userName)
    const { repos, isLoading: isGetUserRepoLoading, isError: isGetUserRepoError, errorMessage: getUsersErrorMessage } = useGetUserRepos(userName)
    const { followersCount, topFollowers, isLoading: isGetFollowersLoading, isError: isGetFollowersError, errorMessage: getFollowersErrorMessage } = useGetFollowers(userName)

    if (isGetOrgsLoading || isGetUserRepoLoading || isGetFollowersLoading) {
        return <Loading />
    }
  
    if (isGetOrgsError || isGetUserRepoError || isGetFollowersError) {
        return (<ErrorBoundary errorMessage={getOrgErrorMessage || getFollowersErrorMessage || getUsersErrorMessage} />)
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        navigate(`../`)
    }

    return (<React.Fragment>
        <div className='banner' onClick={handleClick}>
            User Details</div>
        <div className="repos">
            {repos && repos.map((repoItem: Repo, index: number) => (
                <Card key={index} className='repoCard' repoData={repoItem} followersData={topFollowers} orgData={orgs} followersCount={followersCount} />
            ))}
        </div>
    </React.Fragment>
    )
}

export default UserDetails