
const Filter = ({filterValue, handleInput}) => {
  return (
    <div>
        filter shown with <input value={filterValue} onChange={handleInput}/>
      </div>
  )
}

export default Filter