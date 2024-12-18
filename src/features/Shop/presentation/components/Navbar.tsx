import React from 'react'



const Navbar: React.FC = () => {
    return (
        <div className='w-full h-[14vh] pt-10 pb-5 px-20 border-b-2 border-black flex justify-between top-0'>
            <h1 id='playShop' className='text-3xl font-bold'>Shop.</h1>
            <div className='flex gap-16'>
                <div className='flex gap-4 opacity-60'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                </div>
                <div className='flex gap-4 opacity-60'>
                    <a href="#">Cart</a>
                    <a href="#">My account</a>
                </div>
            </div>
        </div>
    )
}


export default Navbar;