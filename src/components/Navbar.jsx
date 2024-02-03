import React from 'react'

function Navbar (){
    return(
        <>
        <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4  py-4  sticky top-0'>
        <div className='items-center'><img src="https://clipart-library.com/new_gallery/42-425964_vector-nike-logo-svg.png" alt="" className="w-36 h-20" /></div>
        <div className=' '>
            <ul className='flex space-x-4 text-2xl justify-center'>
                <li className='cursor-pointer' >Menu</li>
                <li className='cursor-pointer' >Location</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div>
        <button
        type="button"
        className="items-center right  bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Login
      </button>
        </div>
        </div>
        </>
    )
}
export default Navbar