import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext, Provider as TodosProvider } from '../../context/taskContext';
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import { ModalWrapper } from './Styles';

const AddTaskModal = (props) => {
  const { createTodo } = useContext(TodosContext);
  const [todo, settodo] = useState('');
  const [option, setOption] = useState('High')
  const [dragChecked, setDragChecked] = useState(false)
  let [label, setLabel] = useState('')
  let myRef;
  useEffect(() => {
    document.addEventListener('click', closeTodoModal);
    return () => {
      document.removeEventListener('click', closeTodoModal);
    }
  }, []);

  const closeTodoModal = (e) => {
    if (myRef && !myRef.contains(e.target)) {
      props.closeModal();
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    settodo(e.target.value);
  }

  const handleLabel = (e) => {
    e.preventDefault();
    setLabel(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("value: ",dragChecked)
    console.log("labels: ",label)
    if (todo || option) {
      label='Labels: ,'+label;
      await createTodo({ title: todo, taskPriority: option, isCompleted:dragChecked,taskLabel:label }, Cookies);
      props.closeModal();
    }
  }

  return (
    <ModalWrapper>
      <form ref={(node) => (myRef = node)}>
        <h4 className="text-center">Create Todo</h4>
        <h6 className="text-center"> <b>Note:</b>Add ',' between labels</h6>
        <div className="form-group">
          <input
            type="text"
            name="todo"
            className="form-control"
            placeholder="Enter new Todo"
            onChange={handleChange}
          />
          <br />
          <select name='option' className="form-control"
            onChange={(e) => {
              const selectedPri = e.target.value;
              setOption(selectedPri);
            }}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <br />
          <input
            type="text"
            name="label"
            className="form-control"
            placeholder="Enter labels"
            onChange={handleLabel}
          />
          <br />
          <label>
            <span>Complete Status: </span>
            <DragSwitch offColor='rgb(200,0,0)' checked={dragChecked} onChange={(e) => {
              setDragChecked(e)
            }} />
          </label>


        </div>
        <button
          className="btn btn-primary float-right"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="btn btn-danger float-right mr-1"
          onClick={closeTodoModal}
        >
          Cancel
        </button>
      </form>
    </ModalWrapper>
  );
};

export default AddTaskModal;