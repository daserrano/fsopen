import React from 'react'

const Total = ({ parts }) => {
    // const total = parts.map(part => part.exercises.reduce((sum, acc) => sum + acc, 0)); 
    const totals = parts.map(part => part.exercises);
    const numbers = totals.reduce((sum, acc) => sum + acc, 0)
    return (
        <b>Total of {numbers} exercises</b>
    )
}

export default Total