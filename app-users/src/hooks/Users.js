import { useQuery } from "@tanstack/react-query"

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

export const useUsers = () => {
    const {data, error, isError, isLoading} = useQuery(['users'],fetchUsers)

    return {
        users: data,
        error,
        isLoading,
        isError
    }
}

