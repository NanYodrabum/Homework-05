import React from 'react'

function PageNavigate(props) {
    const { currentPage, setCurrentPage, total } = props
    const start = (currentPage - 1) * 10 + 1
    const end = currentPage * 10
    const hdlClick = (n) => {
        if (currentPage + n < 1) {
            return 
        }
        setCurrentPage(prv => +prv + n)
    }
    const hdlChange = e => {
        if(isNaN(e.target.value) || e.target.value.trim()==="") {
            return 
        }
        setCurrentPage(e.target.value)
    }

    return (
        <div className='flex items-center gap-1 border'>
            <button
                className='btn btn-xs btn-primary'
                onClick={() => hdlClick(-1)}
            >Prev</button>
            <input className='w-10'
                value={currentPage}
                onChange={hdlChange}
            />
            <button
                className='btn btn-xs btn-primary'
                onClick={() => hdlClick(+1)}
            >Next</button>
            <p>{start}-{end} of {total}</p>
        </div>
    )
}

export default PageNavigate