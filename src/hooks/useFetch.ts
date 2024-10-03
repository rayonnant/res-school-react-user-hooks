import {useCallback, useEffect, useState} from 'react'

type Data = {
    userId: number
    id: string
    title: string
    body: string
}

type RefetchObj = {
    params: {
        _limit: number
    }
}

type ReturnType = {
    data: Data[]
    isLoading: boolean
    error: boolean
    refetch: (obj: RefetchObj) => void
}

type UseFetch = (url: string) => ReturnType

export const useFetch: UseFetch = (url: string): ReturnType => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<Data[]>([])
    const [error, setError] = useState<boolean>(false)
    const [refetchObj, setRefetchObj] = useState<RefetchObj>({
        params: {
            _limit: 0
        }
    })
    const [btnClickCount, setBtnClickCount] = useState<number>(0)

    const refetch = (obj: RefetchObj): void => {
        if (obj.params._limit >= 1) {
            setRefetchObj((oldState) => ({
                ...oldState,
                params: {
                    ...oldState.params,
                    _limit: obj.params._limit
                }
            }))
            setBtnClickCount(oldState => oldState + 1)
        }
    }

    const getData = useCallback(() => {
        setError(false)
        setIsLoading(true)

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Fetching error: ${res.status}`)
                }
                return res.json()
            })
            .then(res => setData(res))
            .catch(() => 'Error')
            .then(res => {
                if (res === 'Error') {
                    if (refetchObj.params._limit > 1) {
                        setRefetchObj((oldState) => ({
                            ...oldState,
                            params: {
                                ...oldState.params,
                                _limit: oldState.params._limit > 0 ? oldState.params._limit - 1 : 0
                            }
                        }))
                    } else {
                        setIsLoading(false)
                        setError(true)
                    }
                } else {
                    setIsLoading(false)
                    setError(false)
                }
            })
    }, [url, refetchObj.params._limit, btnClickCount])


    useEffect(() => {
        getData()
    }, [getData])


    return {
        data,
        isLoading,
        error,
        refetch
    }
}



