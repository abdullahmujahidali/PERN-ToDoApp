import { decode } from "jsonwebtoken";
import { Todo, TodoTask } from "../models";

const task = {
    async createTask({ body, decode }, res, next) {
        try {
            const { title,taskPriority,isCompleted } = body;
            const { userId } = decode;
            const todo = await Todo.create({ title, userId,taskPriority,isCompleted });
            return res.status(201).send(todo);
        }
        catch (exp) {
            return next(new Error(exp));
        }
    },
    async fetchAllTask({ body, decode }, res, next) {
        try {
            const myTask = await Todo.findAll({
                where: { userId: decode.userId },
                include: [{
                    model: TodoTask,
                    as: 'TodoTasks'
                }],
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
            const updatedTask = await Todo.update({ title: body.title, taskPriority:body.taskPriority, isCompleted:body.isCompleted }, {
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