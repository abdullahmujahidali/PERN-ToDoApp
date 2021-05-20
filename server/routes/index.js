import auth from '../controllers/authController';
import customMiddleWare from  '../middleware/auth';
import gateway from  '../middleware/gateway';
import task from '../controllers/taskController';
import todoTaks from '../controllers/todoTaksController';
export const routes = (app) => {
    app.get('/', (req, res) => res.send({
        message: "Welcome to my Todo backend"
    }
    ))
    app.post('/server/auth/signup',customMiddleWare, auth.signUp);
    app.post('/server/auth/signin',auth.signIn);

    app.post('/server/todos',gateway,task.createTask);
    app.get('/server/todos',gateway,task.fetchAllTask);
    app.get('/server/todos/:todoId',gateway,task.fetchTask);
    app.put('/server/todos/:todoId',gateway,task.updateTask);
    app.delete('/server/todos/:todoId',gateway,task.deleteTask);

    app.post('/server/todoTasks',todoTaks.create);
    app.get('/server/todos/:todoId/todoTaks',todoTaks.fetchAll);
    app.get('/server/todoTasks/:todoIdItemId',gateway,todoTaks.fetchOne);
};


