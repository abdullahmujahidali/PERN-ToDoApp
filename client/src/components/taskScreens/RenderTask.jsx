import React, { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext } from '../../context/taskContext';
import AddLabel from './AddLabel';
import { Context as Tontext, Provider as TodosProvider } from '../../context/taskContext';
const RenderTodos = () => {
    const [showCreateTask, setshowCreateTask] = useState(false);
    const [todoId, settodoId] = useState(0);
    const [task, settask] = useState('')
    const { updateTask } = useContext(Tontext)
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
            await updateTask({ title: task, todoId }, Cookies);

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
    const checkColor = (color)=>{
        console.log(color)
        let res="";
        if(color==='High'){
            return (
                res="High"
            )
        }
        else if(color==='Medium'){
            return (
                res="Medium"
            )
        }
        else if(color==="Low"){
            return (
                res="Low"
            )
        }
    }

    return (
        <>

            <div className="row justify-content-center">
                {state.todos && state.todos.sort((a, b) => (a.id - b.id)).map((todo, i) => {
                    i++;
                    return (
                        <div key={todo.id} className="col-md-10 todo yelp zoom">
                            <button className="float-right delete-btn" onClick={() => handleDeleteTodo(todo)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </button>
                            <button className={ checkColor(todo.taskPriority) } >{todo.taskPriority} </button> 

                            <row>
                                <button onClick={() => handleAddTask(todo)} className="float-right edit-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                                        <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                                    </svg>
                                </button>

                                <div className="col-md-10">
                                <p style={{marginTop:"50px;"}}> <h3 >Title:  {todo.title}
                                      </h3>     </p>
                                   <h6> Status: <b>{todo.isCompleted === true ? 'Completed' : 'Incomplete'}</b></h6>
                                    <br />
                                    <b>
                                    {
                                       
                                        todo.taskLabel.split(',').reduce((all, cur) => [
                                        ...all,
                                        <row>
                                        <button className="labelC" > { cur} </button> 
                                        </row>
                                    ])}
                                    </b>
                                </div>
                            </row>

                            {showCreateTask && todoId === todo.id && <AddLabel handleChange={handleChange} handleSubmit={handleSubmit} />}
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default RenderTodos