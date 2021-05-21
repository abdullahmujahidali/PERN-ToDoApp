import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext, Provider as TodosProvider } from '../../context/taskContext';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ModalWrapper } from './Styles';

const AddTaskModal = (props) => {
  const { createTodo } = useContext(TodosContext);
  const [todo, settodo] = useState('');
  const [option, setOption] = useState('')
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

  const handlePriority = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(todo)
    if (todo || option) {
      await createTodo({ title: todo, taskPriority: option }, Cookies);
      console.log(option)
      props.closeModal();

    }
  }

  return (
    <ModalWrapper>
      <form ref={(node) => (myRef = node)}>
        <h4 className="text-center">Create Todo</h4>
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