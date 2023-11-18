
const Persons = ({persons, filterValue }) => {
    return (
        <main style={{textAlign: "left"}}>
            {persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
            ).map(person => (
                <p key={person.key}>
                    <span>{person.name} # {person.number}</span>
                </p>
            ))}
        </main>
    )
}

export default Persons