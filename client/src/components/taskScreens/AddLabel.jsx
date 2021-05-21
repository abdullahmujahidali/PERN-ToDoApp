import React from 'react'

const AddLabel = ({ handleSubmit, handleChange }) => {
  return (
    <form>
      <div className="create-task justify-content-center">
        <input onChange={handleChange} type="text" name="task" placeholder="Enter a new label" />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </form>
  )
}

export default AddLabel