import React from 'react'
import ItemsShow from './ItemsShow';
import BuyDetails from './BuyDetails';


const Cart: React.FC = () => {
    return (
        <div className='w-full h-[86vh] px-10 py-6 flex gap-2'>
            <ItemsShow />
            <BuyDetails />
        </div>
    )
}


export default Cart;