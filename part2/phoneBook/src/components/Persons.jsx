
const Persons = ({persons, filterValue }) => {
    return (
        <main>
            {persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
            ).map(person => (
                <p key={person.key}>{person.name} {person.number}</p>
            ))}
        </main>
    )
}

export default Persons