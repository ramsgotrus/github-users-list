import { useEffect, useState } from 'react'

const useGetUserRepos = (userName: string | undefined) => {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(Boolean)
    const [isError, setIsErrors] = useState(Boolean)
    const [errorMessage, setErrorMessage] = useState(String)

    useEffect(() => {
        const fetchRepos = async () => {
            setIsLoading(true)
            const getRepos = await fetch(`https://api.github.com/users/${userName}/repos?per_page=6&sort=updated`, {
            //const getRepos = await fetch('http://localhost:3000/repo-mock.json', {
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

            if (!!getRepos) {
                setRepos(getRepos)
                setIsLoading(false)
                setErrorMessage('')
                setIsErrors(false)
            }
        }
        if (userName)
            fetchRepos()
        return () => {
            fetchRepos()
            setRepos([])
            setIsLoading(false)
            setIsErrors(false)
            setErrorMessage('')
        }
    }, [userName])

    return { repos, isLoading, isError, errorMessage }
}

export default useGetUserRepos