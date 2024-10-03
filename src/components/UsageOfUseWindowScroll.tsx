import React from 'react'
import {useWindowScroll} from '../hooks/useWindowScroll'

export const UsageOfUseWindowScroll: React.FC = () => {
    const [scroll, scrollTo] = useWindowScroll()

    return (
        <div className='example'>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({y: 0})}>Scroll to top</button>
        </div>
    )
}
