import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import Design from '../designs/Design';
import { TodoList } from './Styles';
import AddTaskModal from './AddTaskModal';
import { Context as TodosContext, Provider as TodosProvider } from '../../context/taskContext';
import RenderTodos from './RenderTask';
import NavBar from '../designs/NavBar';


const ListTodos = () => {
  const { state, fetchTodos } = useContext(TodosContext);
  const [showModal, setshowModal] = useState(false);
  const [todoId, setTodoId] = useState(null)

  useEffect(() => {
    (async () => {
      await fetchTodos(Cookies);
    })();
  }, []);
  const handleAddTask = (todo) => {
    // setshowAddTaskInput(true);
    setTodoId(todo.id);
  }
  const handleShowModal = () => {
    setshowModal(true);
  }
  const handleCloseModal = () => {
    setshowModal(false);
  }

  return (
    <Design>

      <TodoList>
        {showModal && <AddTaskModal closeModal={handleCloseModal} />}
        <div className="container">
          <div className="row">
            <div className="col-md-12 header  mt-8">
              <h1 className="blinking">Welcome to your to do list!   <button className="btn btn-dark float-right" onClick={handleShowModal}>Add a new Task</button>  </h1>
           
            </div>

          </div>
          <div className="row">
          </div>
          <RenderTodos
            handleAddTask={handleAddTask}
            todoId={todoId}
          />
        </div>
      </TodoList>

    </Design>
  )
}
export default () => {
  return (
    <TodosProvider>
      <ListTodos />
    </TodosProvider>
  )
};