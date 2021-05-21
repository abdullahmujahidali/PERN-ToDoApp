import React from 'react'

const AddLabel = ({ handleSubmit, handleChange }) => {
  return (
    <form>
        <br/>
      <div className="create-task justify-content-center">
   
        <input onChange={handleChange} type="text" name="task" placeholder="Enter new title name" />
        <br/>
        <button className="upbtn" onClick={handleSubmit}>Update</button>
      </div>
    </form>
  )
}

export default AddLabel