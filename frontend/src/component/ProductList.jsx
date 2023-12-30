// import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR, {useSWRConfig} from 'swr'


const Product = () => {
    const {mutate} = useSWRConfig();
    const getData = async () => {
        const response = await axios('http://localhost:5000/products')
        return response.data.payload
    }

    const { data } = useSWR('product', getData)
    if (!data) return <h2>Loading Data...</h2>

    const productDelete = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`)
        mutate('product')
    }

    return (
        <div className='flex flex-col mt-5'>
            <div className="w-full">
                <Link to="/add" className='bg-green-500 hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Add New Data</Link>
                <div className="relative shadow rounded-lg mt-3">
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                            <tr>
                                <th className='py-3 px-1 text-center'>ID</th>
                                <th className='py-3 px-6'>Product Name</th>
                                <th className='py-3 px-6'>Price</th>
                                <th className='py-3 px-1 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index) => {
                                return (<tr className='bg-white border-b' key={product.id}>
                                    <td className='py-3 px-1 text-center'>{index + 1}</td>
                                    <td className='py-3 px-6'>{product.name}</td>
                                    <td className='py-3 px-6'>{product.price}</td>
                                    <td className='py-3 px-1 text-center'>
                                        <Link
                                            to={`/edit/${product.id}`}
                                            className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1'>
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => productDelete(product.id)}
                                            className='font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product