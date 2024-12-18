import React from 'react'

const AdminSidebar: React.FC = () => {
    return (
        <div className=' relative h-[86vh] w-[20vw] pt-10 flex flex-col items-center left-0 border-l-black border-2'>
            <div className='mt-6 flex flex-col gap-3 justify-center'>
                <h1 className='text-lg font-semibold'>All Products</h1>
                <a className='opacity-65' href="3">Create New Product</a>
            </div>
        </div>
    )
}

export default AdminSidebar