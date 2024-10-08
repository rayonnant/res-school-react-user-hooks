import {useState, useEffect, useCallback} from 'react'

type Data = {
    userId: number
    id: string
    title: string
    body: string
}

type RefetchObj = {
    params: {}
}

type ReturnType = {
    data: Data[]
    isLoading: boolean
    error: boolean
    refetch: (obj: RefetchObj) => void
}

type UseFetch = (url: string) => ReturnType

export const useFetch: UseFetch = (url: string): ReturnType => {
    const [data, setData] = useState<Data[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [refetchObj, setRefetchObj] = useState<RefetchObj>({
        params: {}
    })

    const refetch: (obj: RefetchObj) => void = (obj: RefetchObj): void => {
        setRefetchObj((oldState: RefetchObj) => ({
            ...oldState,
            params: {
                ...oldState.params,
                ...obj.params
            }
        }))
    }

    const getData: () => void = useCallback((): void => {
        setIsLoading(true)
        setError(false)

        const queryString: string = new URLSearchParams(refetchObj.params).toString()

        fetch(`${url}?${queryString}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Fetching error: ${res.status}`)
                }
                return res.json() as Promise<Data[]>
            })
            .then((res: Data[]): void => setData(res))
            .catch((): void => setError(true))
            .finally((): void => setIsLoading(false))
    }, [url, refetchObj.params])

    useEffect((): void => {
        getData()
    }, [getData])

    return {data, isLoading, error, refetch}
}
