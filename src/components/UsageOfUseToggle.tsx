import React from 'react'
import {useToggle} from '../hooks/useToggle'

export const UsageOfUseToggle: React.FC = () => {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

    return (
        <button onClick={() => toggle()} className='example'>
            {value}
        </button>
    )
}
