import React, { FC } from 'react'
import { format } from "date-fns"


interface DetailsProps {
    name: String;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    created_at: string;
    has_issues: boolean

}
const Details: FC<DetailsProps> = ({ name, stargazers_count, watchers_count, language, created_at, has_issues }) => {
    return (
        <React.Fragment>
            <div className='repositoryDiv'>
                <span>This repository <span className='repoTitle'>{name.charAt(0).toUpperCase() + name.slice(0)} </span> was created on {format(new Date(created_at), "dd MMMM yyyy")}</span>
            </div>
            <div className='detailsCard'>
                <p>Stars: {stargazers_count.toLocaleString()} </p>
                <p>Watchers: {watchers_count.toLocaleString()} </p>
                <p>Language: {language}</p>
                <p>Any issues: {has_issues ? 'Yes' : 'No'}</p>
            </div>
        </React.Fragment>
    )
}

export default Details