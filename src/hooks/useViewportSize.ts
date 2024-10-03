import {useCallback, useEffect, useState} from 'react'

const useWindowEvent = (type: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions | undefined) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener(type, listener, options)
            return () => window.removeEventListener(type, listener, options)
        }
    }, [type, listener, options])
}

export const useViewportSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })
    const updateWindowSize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])

    useWindowEvent('resize', updateWindowSize, undefined)
    useEffect(updateWindowSize, [])

    return windowSize
}
