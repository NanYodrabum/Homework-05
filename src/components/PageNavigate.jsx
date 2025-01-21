import React from 'react'

function PageNavigate(props) {
    const {currentPage, setCurrentPage, total} = props

    return (
       <div className='flex items-center gap-1 border'>
        <button
        className='bg-pink-300 border px-1'
        >Prev</button>
        <input className='w-10'
         value={currentPage}
         onChange={e=>setCurrentPage(e.target.value)}
        />
        <button className='bg-pink-300 border px-1'
        >Next</button>
        <p>1-10 of {total}</p>
       </div>
    )
  }
  
  export default PageNavigate