import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // setLoading(true)
        // axios.get(url).then((res)=>{
        //     setData(res.data)
        // }).catch((error)=>{
        //     setError(error)
        // }).finally(
        //     setLoading(false)
        // )
        const fetchData = async () => {
            try {
                const res = await axios.get(url)
                setData(res.data)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}