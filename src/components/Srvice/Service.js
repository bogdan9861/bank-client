import { useHttp } from "../../hooks/useHttp.hook"


export const Service = () => {
    const { request, loading, error } = useHttp();

    const getUsers = async () => {
        return await request('http://localhost:5000/users')
    }

    return { getUsers }
}
