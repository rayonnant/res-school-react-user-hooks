import React from 'react'
import {useHover} from '../hooks/useHover'

export const UsageOfUseHover: React.FC = () => {
    const {hovered, ref} = useHover()
    const styles = {
        div: {
            border: '1px solid black',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
        }
    }
    return (
        <div ref={ref} style={styles.div} className='example'>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    )
}
