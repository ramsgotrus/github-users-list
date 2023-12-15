import { useEffect, useState } from 'react'

const useGetUsers = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(Boolean)
    const [isError, setIsErrors] = useState(Boolean)
    const [errorMessage, setErrorMessage] = useState(String)
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            const getUsers = await fetch('https://api.github.com/users', {
            //const getUsers = await fetch('http://localhost:3000/user-mock.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        setIsErrors(true)
                        setIsLoading(false)
                        setErrorMessage('An error has occured')
                    }
                    else return response.json();
                })
                .catch((error) => {
                    setIsErrors(true)
                    setIsLoading(false)
                    setErrorMessage(error)
                    console.log('err', error)
                })

            if (!!getUsers) {
                setUsers(getUsers)
                setIsLoading(false)
                setErrorMessage('')
            }
        }
        fetchUsers()
        return () => {
            fetchUsers()
            setUsers([])
            setIsLoading(false)
            setIsErrors(false)
            setErrorMessage('')
        }
    }, [])

    return { users, isLoading, isError, errorMessage }
}

export default useGetUsers