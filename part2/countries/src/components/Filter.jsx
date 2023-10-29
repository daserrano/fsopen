import React from 'react'

const Filter = ({filterValue, handleInput}) => {
  return (
    <div>
        Find countries  <input value={filterValue} onChange={handleInput}/>
    </div>
  )
}

export default Filter