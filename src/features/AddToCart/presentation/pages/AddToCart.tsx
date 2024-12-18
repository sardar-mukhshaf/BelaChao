import React from 'react'
import Navbar from '../../../Shop/presentation/components/Navbar'
import Cart from '../components/Cart'



const AddToCart: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Cart />
        </div>
        
    )
}

export default AddToCart