import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductShow from '../components/ProductShow';

const Shop: React.FC = () => {
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-slate-50">
                <Navbar />
                <div className='flex h-[86vh]'>
                    <Sidebar />
                    <ProductShow />
                </div>
            </div>
        </>
    )
}

export default Shop;