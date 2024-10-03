import React from 'react'
import {useFetch} from '../hooks/useFetch'


export const UsageOfUseFetch: React.FC = () => {
    const {
        data,
        isLoading,
        error,
        refetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div className='example'>
            <div style={{margin: '20px'}}>
                <button onClick={() => refetch({
                    params: {
                        _limit: 3
                    }
                })} style={{padding: '10px'}}>
                    Перезапросить
                </button>
            </div>
            {isLoading && 'Загрузка...'}
            {error && 'Произошла ошибка'}
            {data && !isLoading && data.map(item => <div key={item.id} style={{fontSize: '20px', margin: '10px'}}>{item.title}</div>) }
        </div>
    );
}
