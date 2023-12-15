import React, { FC } from 'react'
import './Styles.css'

interface ErrorBoundaryProps {
    errorMessage: string
}
const ErrorBoundary: FC<ErrorBoundaryProps> = ({ errorMessage }):JSX.Element => {
    return (<div className='error'>
        <h2>An error has occured</h2>
        <h4>{errorMessage}</h4>
    </div>)
}

export default ErrorBoundary