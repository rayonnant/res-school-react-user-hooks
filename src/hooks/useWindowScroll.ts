import {useCallback, useEffect, useState} from 'react'

type ScrollCoords = {
    x: number
    y: number
}

type ReturnArr = [ScrollCoords, (coordsTo: { y: number }) => void]

const useWindowEvent = (type: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions | undefined) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener(type, listener, options)
            return () => window.removeEventListener(type, listener, options)
        }
    }, [type, listener, options])
}

export const useWindowScroll = (): ReturnArr => {
    const [scroll, setScroll] = useState<ScrollCoords>({
        x: 0,
        y: 0
    })

    const updateWindowSize = useCallback(() => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY
        })
    }, [])

    useWindowEvent('scroll', updateWindowSize, undefined)
    useWindowEvent('resize', updateWindowSize, undefined)

    const scrollTo = (coordsTo: { y: number }): void => {
        window.scrollTo({
            top: coordsTo.y,
            behavior: 'smooth'
        })
    }

    return [scroll, scrollTo]
}
