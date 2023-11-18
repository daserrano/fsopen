
const Filter = ({filterValue, handleInput}) => {
  return (
    <div>
        Find: <input value={filterValue} onChange={handleInput}/>
      </div>
  )
}

export default Filter