import React from 'react'
import {useViewportSize} from '../hooks/useViewportSize'

export const UsageOfUseViewportSize: React.FC = () => {
    const {height, width} = useViewportSize()
    return (
        <div className='example'>
            Width: {width}, height: {height}
        </div>
    )
}
