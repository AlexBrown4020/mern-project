import React from 'react'
import useFetch from '../../hooks/useFetch';

export const List = () => {

    const {data, loading, error} = useFetch('/lessons');
    console.log(data)
    return (
        <div>
            List
        </div>
    )
};
