import React from 'react'

const Card: React.FC = () => {
    return (
        <div className='h-[30vh] w-[27vh]  bg-orange-100 flex flex-col rounded-md'>
            <div className='w-full h-[22vh]'>
            </div>
            <div className='w-full h-[8vh] flex items-center justify-between px-3 border-t-2 bg-orange-200 border-gray-950'>
                <div className='flex flex-col '>
                    <h1 className='leading-5 text-sm text-black'>Clinge Bag</h1>
                    <h4 className='leading-5 text-sm text-black'>$550</h4>
                </div>
                <span className='text-black text-4xl font-bold'>+</span>
            </div>
        </div>
    )
}


export default Card;