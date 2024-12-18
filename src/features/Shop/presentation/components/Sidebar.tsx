import React from 'react'


const Sidebar: React.FC = () => {
    return (
        <div className=' relative h-[86vh] w-[22vw] pt-10 flex flex-col items-center left-0 border-l-black border-2'>
            <div className='mt-6 flex gap-3 justify-center'>
                <h1>Sort by:</h1>
                <p className='flex gap-1 text-[12px] justify-center items-center'><input type="checkbox" />Product Quality</p>
            </div>
            <div className='mt-20 flex gap-2 flex-col text-left'>
                <h1 className='font-mono opacity-60'>New Collection</h1>
                <h1 className='font-mono'>All Product</h1>
                <h1 className='font-mono opacity-60'>Discounted Product</h1>
            </div>
            <div className='absolute bottom-14 flex gap-1 flex-col items-start'>
                <h3 className='text-left'>Filter</h3>
                <h3 className='text-left'>Availability</h3>
                <h3 className='text-left opacity-50'>Discount</h3>
            </div>
        </div>
    )
}

export default Sidebar