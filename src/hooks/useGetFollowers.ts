import { useEffect, useState } from 'react'


const useGetFollowers = (userName: string | undefined) => {
    const [isLoading, setIsLoading] = useState(Boolean)
    const [isError, setIsErrors] = useState(Boolean)
    const [followersCount, setFollowersCount] = useState()
    const [topFollowers, setTopFollowers] = useState([])
    const [errorMessage, setErrorMessage] = useState(String)

    useEffect(() => {
        const fetchFollowers = async () => {
            setIsLoading(true)
            const getFetchFollowers = await fetch(`https://api.github.com/users/${userName}/followers`, {
            //const getFetchFollowers = await fetch('http://localhost:3000/user-mock.json', {
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
                }
                )
                .catch((error) => {
                    setIsErrors(true)
                    setIsLoading(false)
                    setErrorMessage(error)
                })

            if (!!getFetchFollowers) {
                setFollowersCount(getFetchFollowers.length)
                setTopFollowers(getFetchFollowers)
                setIsLoading(false)
                setIsErrors(false)
                setErrorMessage('')
            }
        }
        if (userName)
            fetchFollowers()
        return () => {
            fetchFollowers()
            setTopFollowers([])
            setIsLoading(false)
            setIsErrors(false)
            setErrorMessage('')
        }
    }, [userName])

    return { followersCount, topFollowers, isLoading, isError, errorMessage }
}

export default useGetFollowers