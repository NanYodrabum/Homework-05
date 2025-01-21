import React from 'react'

function PageNavigate() {

    return (
       <div className='flex gap-1 border'>
        <button>Prev</button>
        <input className='w-10'/>
        <button>Next</button>
        <p>1-10 of 100</p>
       </div>
    )
  }
  
  export default PageNavigate