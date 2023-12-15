import React, { FC } from 'react'
import './Styles.css'

interface LoadingProps {
    className?: string
}
const Loading: FC<LoadingProps> = ({ className }): JSX.Element => {
    return (<div className='error'>
        <h2>Loading...</h2>
    </div>)
}

export default Loading