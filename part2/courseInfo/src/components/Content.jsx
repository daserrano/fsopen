import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    return (
        <main>
            {parts.map(part => (
                <Part part={part} />
            ))}
        </main>
    )
}

export default Content