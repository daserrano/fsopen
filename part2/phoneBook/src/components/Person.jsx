import React from 'react'

const Person = ({person, deletePerson}) => {
    const {key, name, number, id} = person;

    return (
        <div>
            <span>
                <span>{name} # {number}</span>
            <button onClick={() => deletePerson(id)}>delete</button>
            </span>
        </div>
    )
}

export default Person