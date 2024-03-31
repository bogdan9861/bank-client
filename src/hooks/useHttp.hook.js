import { useCallback, useState } from "react"


export const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
        setLoading(true);

        try {

            const res = await fetch(url, { method, body, headers });

            if (!res.ok) {
                throw new Error(`could not featch ${url}, status ${res.status}`);
            }

            const data = await res.json();
            setLoading(false);
            return data;

        } catch (e) {
            setError(e)
            setLoading(false);
        }

    }, [])


    return { request, loading, error };
}