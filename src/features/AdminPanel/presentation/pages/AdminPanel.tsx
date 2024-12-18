import React from 'react'
import Navbar from '../../../Shop/presentation/components/Navbar'
import AdminSidebar from '../components/AdminSidebar'
import Card from '../../../Shop/presentation/components/Card'

const AdminPanel: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='flex h-[86vh]'>
                <AdminSidebar />
                <div id='cardShow' className='w-full py-10 px-10 flex flex-wrap gap-10 justify-center items-start overflow-y-scroll'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default AdminPanel