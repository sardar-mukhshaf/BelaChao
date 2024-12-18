import React from 'react'

const ItemsShow: React.FC = () => {
    return (
        <div>
            {/* carditem */}
            <div className='h-[40vh] w-[37vh]   bg-orange-100 flex flex-col rounded-md border-gray-950 border-2'>
                <div className='w-full h-[27vh]'>
                    {/* picture */}
                </div>
                <div className='w-full h-[9vh] flex items-center justify-between px-3 border-t-2 bg-orange-200 border-gray-950'>
                    <div className='flex flex-col '>
                        <h1 className='leading-5 text-sm text-black'>Clinge Bag</h1>
                        <h4 className='leading-5 text-sm text-black'>$550</h4>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <button className='bg-slate-100 text-lg font-bold text-black rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-200'>+</button>
                        <h1 className='text-[16px] text-red-600 font-bold'>01</h1>
                        <button className='bg-slate-100 text-lg font-bold text-black rounded-full px-4 py-2 hover:bg-blue-600  hover:text-white transition duration-200'>-</button>
                    </div>
                </div>
                <div className='flex items-center justify-between px-3 py-2  bg-orange-300'>
                    <h1 className='text-sm'>Net Total</h1>
                    <h1 className='text-sm'>$1200</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemsShow;