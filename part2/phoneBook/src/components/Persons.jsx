import Person from "./Person"

const Persons = ({ persons, filterValue, deletePerson }) => {
    return (
        <div style={{ textAlign: "left" }}>
            {persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
            ).map(person => (
                <Person key={person.id} person={person} deletePerson={deletePerson} />
            ))}
        </div>
    )
}

export default Persons