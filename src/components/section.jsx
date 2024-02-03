import React from 'react'

function Section(){
    return(
        <div className=' px-12 py-12 flex'>
            <div className='w-1/2 py-'>
                <h1 className='text-9xl font-black'>YOUR FEET DESERVE THE BEST</h1>
                <div className='px-1 mr-8'><p>DISCOVER THE PERFECT PAIR OF SHOES TO ELEVATE YOUR FASHION GAME AND KEEP YOUR FEET HAPPY. OUR CAREFULLY CURATED COLLECTION FEATURES A DIVERSE RANGE OF FOOTWEAR.
              </p>
              <div></div>
              <button
        type="button"
        className="items-center right mx-3 bg-red-600 px-4 py-2  mt-8 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        SHOP NOW
      </button>

      <button
        type="button"
        className="items-center right  border-7 px-4 py-2 text-sm font-semibold text-gary-600 shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        CATEGORY
      </button>

                </div>
            </div>
            <div className='w-1/2'> <img src="https://i.etsystatic.com/24646940/r/il/404e01/2776542239/il_fullxfull.2776542239_q12b.jpg" alt="" /></div>

        </div>
    )
}
 export default Section