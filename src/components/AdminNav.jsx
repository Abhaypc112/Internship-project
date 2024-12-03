import React, { useState } from 'react'

function AdminNav() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState(5);
  return (
    <div>
      <nav>
        <div className='shadow-md w-[100%] flex h-[5rem] items-center justify-between px-5'>
          <ul className='flex w-[50%] md:w-[40%] lg:w-[30%] justify-between items-center font-semibold '>
            <img src='https://simicart.com/wp-content/uploads/eCommerce-logo.jpg' className='cursor-pointer w-20 h-20 ' alt='Logo'/>
            <li className='hidden md:flex cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Users</li>
            <li className='cursor-pointer'>Orders</li>
          </ul>
          <div className='flex gap-5 items-center'>
            <h1>Admin</h1>
            <button className='bg-yellow bg-yellow-400 p-1 px-2 rounded-md font-semibold'>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNav
