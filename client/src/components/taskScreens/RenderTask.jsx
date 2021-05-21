import React, { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext } from '../../context/taskContext';
import AddLabel from './AddLabel';
import { Context as Tontext, Provider as TodosProvider } from '../../context/taskContext';
const RenderTodos = () => {
    const [showCreateTask, setshowCreateTask] = useState(false);
    const [todoId, settodoId] = useState(0);
    const [task, settask] = useState('')
    const {updateTask} = useContext(Tontext)
    const { state, createTask, markTaskAsDone, fetchTodos, deleteTodo } = useContext(TodosContext);

    const handleAddTask = (todo) => {
        setshowCreateTask(true);
        settodoId(todo.id);
    }

    const handleChange = (e) => {
        settask(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (task) {
            await updateTask({ title: task,todoId }, Cookies);

        }
    }

    const handleDeleteTodo = async (todo) => {
        const res = await deleteTodo(todo.id, Cookies);
        if (res) {
            await fetchTodos(Cookies);
        }
    }
    const handleDone = async (task) => {
        const res = await markTaskAsDone({
            id: task.id,
            isCompleted: true,
            text: task.text
        });
        if (res) {
            setshowCreateTask(false);
            await fetchTodos(Cookies);
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center todos">
                {state.todos && state.todos.sort((a, b) => (a.id - b.id)).map((todo, i) => {
                    i++;
                    return (
                        <div key={todo.id} className="col-md-10 todo">
                            <button className="float-right delete-btn" onClick={() => handleDeleteTodo(todo)}>
                                &times;
                            </button>
                            <button onClick={() => handleAddTask(todo)} className="float-right add-btn">
                                Add task
                            </button>
                            <row>
                                <div className="col-md-4">
                                    <p>{i}. {todo.title} {todo.taskPriority} </p>
                                </div>
                                <div className="col-md-4">
                                Status: <b>{todo.isCompleted === true ? 'Completed' : 'Incomplete'}</b>.
                                Labels: {todo.taskLabel} 
                                </div>
                            </row>
                            {showCreateTask && todoId === todo.id && <AddLabel handleChange={handleChange} handleSubmit={handleSubmit} />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RenderTodos