import React from 'react'

const BuyDetails: React.FC = () => {
    return (
        <div className='h-[82.4vh] w-[95vw] flex flex-col px-10'>
            <h1 className='mt-10 text-2xl mb-6 font-mono font-bold'>Price Breakdown</h1>
            <div className='flex items-center justify-between py-1 w-[40vh]'>
                <h1>Total MPR</h1>
                <h1 className='font-bold'>$1900</h1>
            </div>
            <div className='flex items-center justify-between py-1 w-[40vh]'>
                <h1>Discount on MPR</h1>
                <h1 className='font-bold'>$0</h1>
            </div>
            <div className='flex items-center justify-between py-1 w-[40vh]'>
                <h1>Platform Fee</h1>
                <h1 className='font-bold'>$10</h1>
            </div>
            <div className='flex items-center justify-between py-1 w-[40vh] '>
                <h1>Shipping Fee</h1>
                <h1 className='font-bold'>FREE</h1>
            </div>

            <div className='flex items-center justify-between mt-6 border-t-2 border-black py-2 w-[40vh] '>
                <h1>Total Amount</h1>
                <h1 className='font-bold'>FREE</h1>
            </div>
            <button className='text-white bg-black w-fit mt-4 px-4 py-2 rounded-xl'>Place Order</button>

        </div>
    )
}

export default BuyDetails;