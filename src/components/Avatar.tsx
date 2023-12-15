import React, { FC } from 'react'
import { Size } from '../utils/sizes'
import { Organization } from '../data/data'
import './Styles.css'

export interface AvatarProps {
    id: string;
    className?: string;
    imgClass?: string;
    imgSource?: string;
    displayName: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    size?: Size;
    orgData?: Organization[]
}

const Avator: FC<AvatarProps> = ({ className, imgSource, imgClass, displayName, id, onClick, orgData }): JSX.Element => {
    const handleSubmission = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault()
        onClick && onClick(event)
    }

    return (<div className={className} onClick={handleSubmission} id={displayName}>
        <img className={imgClass} src={imgSource} />
        <p> {displayName.charAt(0).toUpperCase() + displayName.slice(0)} </p>
        {orgData &&
            orgData.slice(0, 5).map((follower: Organization, index: number) => (
                <React.Fragment key={index}>
                    <span >
                        Organization: {follower.login}
                    </span>
                </React.Fragment>
            ))}
    </div>)
}

export default Avator
