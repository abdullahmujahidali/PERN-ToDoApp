import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import Design from '../designs/Design';
import { TodoList } from './Styles';
import AddTaskModal from './AddTaskModal';
import { Context as TodosContext, Provider as TodosProvider } from '../../context/taskContext';
import RenderTodos from './RenderTask';


const ListTodos = () => {
  const { state, fetchTodos } = useContext(TodosContext);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    (async () => {
      await fetchTodos(Cookies);
    })();
  }, []);

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
            <div className="col-md-12 header text-center mt-3">
              <h1>My Todos</h1>
            </div>
             <div className="col-md-12">
              <button className="btn btn-primary float-right" onClick={handleShowModal}>New</button>
            </div>
          </div>
          <div className="row">
           
          </div>
          <RenderTodos />
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