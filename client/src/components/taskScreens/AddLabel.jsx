import React from 'react'

const AddLabel = ({ handleSubmit, handleChange }) => {
  return (
    <form>
      <div className="create-task justify-content-center">
      
        <input onChange={handleChange} type="text" name="task" placeholder="Enter new title name" />
        <button onClick={handleSubmit}>Update</button>
      </div>
    </form>
  )
}

export default AddLabel