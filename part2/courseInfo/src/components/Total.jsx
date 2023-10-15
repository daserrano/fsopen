import React from 'react'

const Total = ({ parts }) => {
    const numbers = parts.reduce((sum , acc) => sum + acc.exercises, 0)
    
    return (
        <b>Total of {numbers} exercises</b>
    )
}

export default Total