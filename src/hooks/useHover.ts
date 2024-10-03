import {useEffect, useRef, useState} from 'react'

export const useHover = () => {
    const [hovered, setHovered] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    useEffect(() => {
        const el: HTMLDivElement | null = ref.current
        if (el) {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            }
        }
    }, [ref])

    return {
        hovered,
        ref
    }
}
