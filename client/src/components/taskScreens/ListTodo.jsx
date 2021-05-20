import React, { useState } from 'react';
import Design from '../designs/Design';
import { TodoList } from './Styles';
import CreateTodoModal from './AddTaskModal';


const ListTodo = () => {
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = () => {
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }

  return (
    <Design>
      <TodoList>
        {showModal && <CreateTodoModal closeModal={handleCloseModal} />}
        <div className="container">
          <div className="row">
            <div className="col-md-12 header text-center mt-3">
              <h1>My Todos</h1>
            </div>
             <div className="col-md-12">
              <button className="btn btn-primary float-right" onClick={handleShowModal}>New</button>
            </div>
          </div>
          <div className="row">
           
          </div>
        </div>
      </TodoList>
    </Design>
  )
}
export default ListTodo;