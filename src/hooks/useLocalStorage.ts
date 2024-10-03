import {useEffect, useState} from 'react'

type ReturnValue = [
        string | null,
    {
        setItem: (value: string) => void,
        removeItem: () => void,
    }
]

type UseLocalStorage = (key: string) => ReturnValue

export const useLocalStorage: UseLocalStorage = (key): ReturnValue => {
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        setToken(JSON.stringify(key))
        localStorage.setItem('token', JSON.stringify(key))
    }, [key])


    const setItem = (value: string): void => {
        setToken(JSON.stringify(value))
        localStorage.setItem('token', JSON.stringify(value))
    }
    const removeItem = (): void => {
        setToken(null)
        localStorage.removeItem('token')
    }

    return [
        token, {
            setItem,
            removeItem
        }
    ]
}
