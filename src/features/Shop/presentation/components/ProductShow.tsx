import React from 'react'
import Card from './Card'

const ProductShow: React.FC = () => {
    return (
        <>
        <div id='cardShow' className='w-full py-16 px-10 flex flex-wrap gap-10 justify-center items-start overflow-y-scroll'>
            <Card />
        </div>
        </>

    )
}

export default ProductShow