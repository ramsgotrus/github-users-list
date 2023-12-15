import { useEffect, useState } from 'react'


const useGetOrgs = (userName: string | undefined) => {
    const [isLoading, setIsLoading] = useState(Boolean)
    const [isError, setIsErrors] = useState(Boolean)
    const [orgs, setOrgs] = useState([])
    const [errorMessage, setErrorMessage] = useState(String)

    useEffect(() => {
        const fetchOrgs = async () => {
            setIsLoading(true)
            const getOrgs = await fetch(`https://api.github.com/users/${userName}/orgs`, {
            //const getOrgs = await fetch('http://localhost:3000/org-mock.json', {
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
                })

            if (!!getOrgs) {
                setOrgs(getOrgs)
                setIsLoading(false)
                setIsErrors(false)
                setErrorMessage('')
            }
        }
        if (userName)
            fetchOrgs()
        return () => {
            fetchOrgs()
            setIsLoading(false)
            setIsErrors(false)
            setOrgs([])
            setErrorMessage('')
        }
    }, [userName])

    return { orgs, isLoading, isError, errorMessage }
}

export default useGetOrgs