import { decode } from "jsonwebtoken";
import { Todo, TodoTask } from "../models";

/*
This file is responsible to fetch the data from the body (front end) 
status 201 : Created
status 200: Ok
status 400: Bad Request
Used for task related work (Create, Read, Update, Delete)

Async Await:
    async functions can have await expression the purpose of it is to pause the execution of 
    the function and wait for the passed Promise resolution and then resume the async functions

*/

const task = {
    async createTask({ body, decode }, res, next) {
        try {
            const { title,taskPriority,isCompleted,taskLabel } = body;
            const { userId } = decode;
            const todo = await Todo.create({ title, userId,taskPriority,isCompleted,taskLabel });
            return res.status(201).send(todo);
        }
        catch (exp) {
            return next(new Error(exp));
        }
    },
    async fetchAllTask({ decode }, res, next) {
        try {
            const myTask = await Todo.findAll({
                where: { userId: decode.userId }
            });
            return res.status(200).send(myTask);
        }
        catch (exp) {
            return next(new Error(exp));
        }

    },
    async fetchTask({ params, decode }, res, next) {
        try {
            const myTask = await Todo.findOne({
                where: { id: params.todoId, userId: decode.userId },
                include: [{
                    model: TodoTask,
                    as: 'TodoTasks'
                }],
            });
            if (!myTask) {
                return res.status(400).send({ error: 'Task not found' });
            }
            else {
                return res.status(200).send(myTask);
            }
        }
        catch (exp) {
            return next(new Error(exp));
        }

    },
    async updateTask({ body, decode, params }, res, next) {
        try {
            const myTask = await Todo.findOne({ where: { id: params.todoId, userId: decode.userId }});
            if (!myTask) {
                return res.status(400).send({ error: 'Wrong task id' });
            }
            const updatedTask = await Todo.update({ title: body.title, taskPriority:body.taskPriority, isCompleted:body.isCompleted,taskLabel:body.taskLabel }, {
                where: {id:myTask.id},
                returning:true,
                plain:true
            });
            return res.status(200).send(updatedTask);
        }
        catch (exp) {
            return next(new Error(exp));
        }
    },

    async deleteTask({ params, decode }, res, next) {
        try {
            const myTask = await Todo.findOne({ where: { id: params.todoId, userId: decode.userId } });
            if (!myTask) {
                return res.status(400).send({ error: 'Wrong task id' });
            }
            await myTask.destroy();
            return res.status(200).send({});

        }
        catch (exp) {
            return next(new Error(exp));
        }
    }

}
export default task;