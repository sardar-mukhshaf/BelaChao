import React from 'react'

const Card: React.FC = () => {
    return (
        <div className='h-[30vh] w-[27vh]  bg-slate-50 flex flex-col border-2 border-gray-50 rounded-md'>
            <div className='bg-blue-500 w-full h-[22vh]'>
            </div>
            <div className='bg-green-500 w-full h-[8vh] flex items-center justify-between px-3'>
                <div className='flex flex-col'>
                    <h1 className='leading-5 text-sm text-white'>Clinge Bag</h1>
                    <h4 className='leading-5 text-sm text-white'>$550</h4>
                </div>
                <span className='text-white text-4xl font-bold'>+</span>
            </div>
        </div>
    )
}


export default Card;