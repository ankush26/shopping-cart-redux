import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'

function Home() {
    const {data, error, isLoading} =useGetAllProductsQuery()
    return (
        <div>
            Home
        </div>
    )
}

export default Home
