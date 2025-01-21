import React, { useEffect, useState } from 'react'


function SearchBar(props) {
    const { searchText, setSearchText } = props
    const [input, setInput] = useState('')
    useEffect (()=>{
        let timer1 = setTimeout (()=>{
            setSearchText(input)
        }, 1000)
        return ()=>{
            clearTimeout(timer1)
        }
    },[input])

    return (
        <label>
            <input 
            value={input} 
            onChange={e=>{setInput(e.target.value)}}/>
        </label>
    )
}

export default SearchBar