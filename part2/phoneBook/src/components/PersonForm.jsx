
const PersonForm = ({ addPerson, newName, handleChangeName, handleChangeNumber, newNumber }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={handleChangeName} />
            </div>
            <div>
                Number: <input value={newNumber} onChange={handleChangeNumber} />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm