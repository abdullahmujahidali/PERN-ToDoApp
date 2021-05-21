import React, { useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext } from '../../context/taskContext';

const RenderTodos = () => {
  const { state } = useContext(TodosContext); 
  return (
    <div className="container">
      <div className="row justify-content-center todos">
        {state.todos && state.todos.sort((a, b) => (b.id - a.id)).map((todo, i) => {
          i++;
          return (
            <div key={todo.id} className="col-md-10 todo">
              <button className="float-right delete-btn">
                &times;
              </button>
              <button className="float-right add-btn">
                Add task
              </button>
              <p>{i}. {todo.title}<br/>{todo.taskPriority} </p>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RenderTodos